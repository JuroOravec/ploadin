import loaderUtils from 'loader-utils';

import type {
  ClassId,
  NonNullClassId,
  Instance,
  LoaderContext,
  LoaderOptions,
} from './types';

import provider from './lib/provider';

type InstanceProxy = { [id in NonNullClassId]: Instance };

const instanceMapProxy = new Map<ClassId, InstanceProxy>();
const instanceByIdMap = new WeakMap<InstanceProxy, Instance>();

// Proxied access to the instance map so instances can be weakly referenced
function getCachedInstance(classId: NonNullClassId) {
  const mapKey = instanceMapProxy.get(classId);
  return instanceByIdMap.get(mapKey!);
}

function cacheInstance(classId: NonNullClassId, instance: Instance) {
  let mapKey = instanceMapProxy.get(classId);
  if (mapKey === undefined) {
    mapKey = { id: classId } as InstanceProxy;
    instanceMapProxy.set(classId, mapKey);
  }
  return instanceByIdMap.set(mapKey, instance);
}

function getPloadin(loaderContext: LoaderContext) {
  const { classId, instanceId } = loaderUtils.getOptions(
    loaderContext,
  ) as LoaderOptions;

  if (classId === undefined) {
    throw Error(
      '[Ploadin][loader] Class ID not found. Cannot search for Ploadin ' +
        'instance',
    );
  }

  const cachedInstance = getCachedInstance(classId);
  if (cachedInstance) return cachedInstance;

  const klass = provider.getClassById(classId);
  if (klass === undefined) {
    throw Error(
      `[Ploadin][loader] Invalid class ID "${classId}". No class with such ` +
        `ID.`,
    );
  }

  if (instanceId === undefined) {
    throw Error(
      '[Ploadin][loader] Class ID not found. Cannot search for Ploadin ' +
        'instance',
    );
  }
  const instance = provider.getClassInstance(klass, instanceId);
  cacheInstance(classId, instance!);

  return instance;
}

export default function loader(
  this: LoaderContext,
  source?: string,
  sourceMap?: string,
  ...args: any[]
) {
  const instance = getPloadin(this);
  if (instance && instance.loader) {
    return instance.loader(this, source, sourceMap, ...args);
  }
}

export function pitch(
  this: LoaderContext,
  remainingRequest: string,
  precedingRequest: string,
  ...args: any[]
) {
  const instance = getPloadin(this);
  if (instance && instance.pitch) {
    return instance.pitch(this, remainingRequest, precedingRequest, ...args);
  }
}

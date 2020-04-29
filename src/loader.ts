import loaderUtils from 'loader-utils';

import type {
  NonNullClassId,
  NonNullInstanceId,
  Instance,
  LoaderContext,
  LoaderOptions,
} from './types';

import provider from './lib/provider';

type InstanceProxy = { [id in NonNullClassId]: Instance };
type IdToInstanceProxy = Map<NonNullInstanceId, InstanceProxy>;

const classMapProxy = new Map<NonNullClassId, IdToInstanceProxy>();
const instanceMapProxy = new Map<NonNullInstanceId, InstanceProxy>();
const instanceByIdMap = new WeakMap<InstanceProxy, Instance>();

// Proxied access to the instance map so instances can be weakly referenced
function getCachedInstance(
  classId: NonNullClassId,
  instanceId: NonNullInstanceId,
) {
  const instanceKeyMap = classMapProxy.get(classId);
  const instanceKey = instanceKeyMap?.get(instanceId);
  return instanceByIdMap.get(instanceKey!);
}

function cacheInstance(
  classId: NonNullClassId,
  instanceId: NonNullInstanceId,
  instance: Instance,
) {
  let instanceKeyMap = classMapProxy.get(classId);
  if (instanceKeyMap === undefined) {
    instanceKeyMap = new Map();
    classMapProxy.set(classId, instanceKeyMap);
  }
  let instanceKey = instanceMapProxy.get(instanceId);
  if (instanceKey === undefined) {
    instanceKey = { id: instanceId } as InstanceProxy;
    instanceMapProxy.set(instanceId, instanceKey);
  }
  return instanceByIdMap.set(instanceKey, instance);
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
  if (instanceId === undefined) {
    throw Error(
      '[Ploadin][loader] Instance ID not found. Cannot search for Ploadin ' +
        'instance',
    );
  }

  const cachedInstance = getCachedInstance(classId, instanceId);
  if (cachedInstance) return cachedInstance;

  const klass = provider.getClassById(classId);
  if (klass === undefined) {
    throw Error(
      `[Ploadin][loader] Invalid class ID "${classId}". No class with such ` +
        `ID.`,
    );
  }

  const instance = provider.getClassInstance(klass, instanceId);
  cacheInstance(classId, instanceId, instance!);

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

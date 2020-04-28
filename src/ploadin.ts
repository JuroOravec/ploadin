import provider from './lib/provider';

import type {
  ClassId,
  InstanceId,
  Ploadin as IPloadin,
  Subclass,
} from './types';

const loaderPath = require.resolve('./loader');

type GetLoaderOptions<
  CId extends ClassId = ClassId,
  IId extends InstanceId = InstanceId
> = {
  classId: CId;
  instanceId: IId;
};
function getLoaderObject<
  CId extends ClassId = ClassId,
  IId extends InstanceId = InstanceId
>({ classId, instanceId }: GetLoaderOptions<CId, IId>) {
  return {
    loader: loaderPath,
    query: { classId, instanceId },
  };
}

export class Ploadin implements IPloadin {
  constructor() {
    provider.addInstance(this);
  }

  get _instanceId(): InstanceId {
    return provider.getInstanceId(this);
  }

  static get _classId(): ClassId {
    return provider.getClassId(this);
  }

  get _classId(): ClassId {
    return provider.getClassId(this);
  }

  static get asLoader() {
    return getLoaderObject({
      classId: this._classId,
      instanceId: undefined,
    });
  }

  get asLoader() {
    return getLoaderObject({
      classId: this._classId,
      instanceId: this._instanceId,
    });
  }
}

provider.addClass(Ploadin);

export function registerSubclass(PloadinSubclass: Subclass) {
  provider.addClass(PloadinSubclass);
}

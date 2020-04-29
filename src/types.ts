import type InstanceManager from 'instance-manager';

type Constructor<T> = new (...args: any[]) => T;

export type ClassId = ReturnType<InstanceManager['addClass']>;
export type NonNullClassId = NonNullable<ClassId>;
export type InstanceId = ReturnType<InstanceManager['addClass']>;
export type Instance<T extends Ploadin = Ploadin> = T;
export type Subclass<T extends Instance = Instance> = Constructor<T>;

export type LoaderContext = any;
export type LoaderOptions = { [key: string]: any } & {
  classId: ClassId;
  instanceId: InstanceId;
};

export type LoaderFunc = (
  this: LoaderContext,
  source?: string,
  sourceMap?: string,
  ...args: any[]
) => void;

export type PitchFunc = (
  this: LoaderContext,
  remainingRequest: string,
  precedingRequest: string,
  ...args: any[]
) => void;

export interface Ploadin {
  asLoader: {
    loader: string;
    query: {
      classId: ClassId;
      instanceId: InstanceId;
    };
  };
  loader?: LoaderFunc;
  pitch?: PitchFunc;
  apply?: Function;
}

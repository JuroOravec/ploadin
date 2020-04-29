[ploadin](README.md)

# ploadin

## Index

### Classes

* [Ploadin](classes/ploadin.md)

### Type aliases

* [ClassId](README.md#classid)
* [Constructor](README.md#constructor)
* [GetLoaderOptions](README.md#getloaderoptions)
* [Instance](README.md#instance)
* [InstanceId](README.md#instanceid)
* [InstanceProxy](README.md#instanceproxy)
* [LoaderContext](README.md#loadercontext)
* [LoaderFunc](README.md#loaderfunc)
* [LoaderOptions](README.md#loaderoptions)
* [NonNullClassId](README.md#nonnullclassid)
* [PitchFunc](README.md#pitchfunc)
* [Subclass](README.md#subclass)

### Variables

* [instanceByIdMap](README.md#const-instancebyidmap)
* [instanceMapProxy](README.md#const-instancemapproxy)
* [loaderPath](README.md#const-loaderpath)
* [mainDebug](README.md#const-maindebug)

### Functions

* [cacheInstance](README.md#cacheinstance)
* [getCachedInstance](README.md#getcachedinstance)
* [getDebugLogger](README.md#getdebuglogger)
* [getLoaderObject](README.md#getloaderobject)
* [getPloadin](README.md#getploadin)
* [loader](README.md#loader)
* [pitch](README.md#pitch)
* [registerSubclass](README.md#registersubclass)

## Type aliases

###  ClassId

Ƭ **ClassId**: *ReturnType‹InstanceManager["addClass"]›*

*Defined in [types.ts:5](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L5)*

___

###  Constructor

Ƭ **Constructor**: *object*

*Defined in [types.ts:3](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L3)*

#### Type declaration:

___

###  GetLoaderOptions

Ƭ **GetLoaderOptions**: *object*

*Defined in [ploadin.ts:12](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L12)*

#### Type declaration:

* **classId**: *CId*

* **instanceId**: *IId*

___

###  Instance

Ƭ **Instance**: *T*

*Defined in [types.ts:8](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L8)*

___

###  InstanceId

Ƭ **InstanceId**: *ReturnType‹InstanceManager["addClass"]›*

*Defined in [types.ts:7](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L7)*

___

###  InstanceProxy

Ƭ **InstanceProxy**: *object*

*Defined in [loader.ts:13](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L13)*

#### Type declaration:

___

###  LoaderContext

Ƭ **LoaderContext**: *any*

*Defined in [types.ts:11](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L11)*

___

###  LoaderFunc

Ƭ **LoaderFunc**: *function*

*Defined in [types.ts:17](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L17)*

#### Type declaration:

▸ (`this`: [LoaderContext](README.md#loadercontext), `source?`: undefined | string, `sourceMap?`: undefined | string, ...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [LoaderContext](README.md#loadercontext) |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`...args` | any[] |

___

###  LoaderOptions

Ƭ **LoaderOptions**: *object & object*

*Defined in [types.ts:12](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L12)*

___

###  NonNullClassId

Ƭ **NonNullClassId**: *NonNullable‹[ClassId](README.md#classid)›*

*Defined in [types.ts:6](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L6)*

___

###  PitchFunc

Ƭ **PitchFunc**: *function*

*Defined in [types.ts:24](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L24)*

#### Type declaration:

▸ (`this`: [LoaderContext](README.md#loadercontext), `remainingRequest`: string, `precedingRequest`: string, ...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [LoaderContext](README.md#loadercontext) |
`remainingRequest` | string |
`precedingRequest` | string |
`...args` | any[] |

___

###  Subclass

Ƭ **Subclass**: *[Constructor](README.md#constructor)‹T›*

*Defined in [types.ts:9](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L9)*

## Variables

### `Const` instanceByIdMap

• **instanceByIdMap**: *WeakMap‹object, [Ploadin](classes/ploadin.md)›* = new WeakMap<InstanceProxy, Instance>()

*Defined in [loader.ts:16](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L16)*

___

### `Const` instanceMapProxy

• **instanceMapProxy**: *Map‹undefined | number, object›* = new Map<ClassId, InstanceProxy>()

*Defined in [loader.ts:15](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L15)*

___

### `Const` loaderPath

• **loaderPath**: *string* = require.resolve('./loader')

*Defined in [ploadin.ts:10](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L10)*

___

### `Const` mainDebug

• **mainDebug**: *log* = getDebugLogger()

*Defined in [lib/debug.ts:15](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/lib/debug.ts#L15)*

## Functions

###  cacheInstance

▸ **cacheInstance**(`classId`: [NonNullClassId](README.md#nonnullclassid), `instance`: [Instance](README.md#instance)): *WeakMap‹object, [Ploadin](classes/ploadin.md)›*

*Defined in [loader.ts:24](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`classId` | [NonNullClassId](README.md#nonnullclassid) |
`instance` | [Instance](README.md#instance) |

**Returns:** *WeakMap‹object, [Ploadin](classes/ploadin.md)›*

___

###  getCachedInstance

▸ **getCachedInstance**(`classId`: [NonNullClassId](README.md#nonnullclassid)): *undefined | [Ploadin](classes/ploadin.md)*

*Defined in [loader.ts:19](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`classId` | [NonNullClassId](README.md#nonnullclassid) |

**Returns:** *undefined | [Ploadin](classes/ploadin.md)*

___

###  getDebugLogger

▸ **getDebugLogger**(): *log*

*Defined in [lib/debug.ts:4](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/lib/debug.ts#L4)*

**Returns:** *log*

___

###  getLoaderObject

▸ **getLoaderObject**<**CId**, **IId**>(`__namedParameters`: object): *object*

*Defined in [ploadin.ts:19](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L19)*

**Type parameters:**

▪ **CId**: *[ClassId](README.md#classid)*

▪ **IId**: *[InstanceId](README.md#instanceid)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`classId` | CId |
`instanceId` | IId |

**Returns:** *object*

* **loader**: *string* = loaderPath

* ### **query**: *object*

  * **classId**: *CId*

  * **instanceId**: *IId*

___

###  getPloadin

▸ **getPloadin**(`loaderContext`: [LoaderContext](README.md#loadercontext)): *undefined | [Ploadin](classes/ploadin.md)*

*Defined in [loader.ts:33](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | [LoaderContext](README.md#loadercontext) |

**Returns:** *undefined | [Ploadin](classes/ploadin.md)*

___

###  loader

▸ **loader**(`this`: [LoaderContext](README.md#loadercontext), `source?`: undefined | string, `sourceMap?`: undefined | string, ...`args`: any[]): *void*

*Defined in [loader.ts:68](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [LoaderContext](README.md#loadercontext) |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`...args` | any[] |

**Returns:** *void*

___

###  pitch

▸ **pitch**(`this`: [LoaderContext](README.md#loadercontext), `remainingRequest`: string, `precedingRequest`: string, ...`args`: any[]): *void*

*Defined in [loader.ts:80](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/loader.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [LoaderContext](README.md#loadercontext) |
`remainingRequest` | string |
`precedingRequest` | string |
`...args` | any[] |

**Returns:** *void*

___

###  registerSubclass

▸ **registerSubclass**(`PloadinSubclass`: [Subclass](README.md#subclass), `subclassOptions`: any): *void*

*Defined in [ploadin.ts:67](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`PloadinSubclass` | [Subclass](README.md#subclass) |
`subclassOptions` | any |

**Returns:** *void*

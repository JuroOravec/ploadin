[ploadin](../README.md) › [Ploadin](ploadin.md)

# Class: Ploadin

## Hierarchy

* **Ploadin**

## Implements

* [Ploadin](ploadin.md)

## Implemented by

* [Ploadin](ploadin.md)

## Index

### Constructors

* [constructor](ploadin.md#constructor)

### Properties

* [apply](ploadin.md#optional-apply)
* [asLoader](ploadin.md#asloader)
* [loader](ploadin.md#optional-loader)
* [pitch](ploadin.md#optional-pitch)

### Accessors

* [_classId](ploadin.md#_classid)
* [_instanceId](ploadin.md#_instanceid)
* [classOptions](ploadin.md#classoptions)
* [_classId](ploadin.md#static-_classid)
* [asLoader](ploadin.md#static-asloader)

## Constructors

###  constructor

\+ **new Ploadin**(): *[Ploadin](ploadin.md)*

*Defined in [ploadin.ts:29](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L29)*

**Returns:** *[Ploadin](ploadin.md)*

## Properties

### `Optional` apply

• **apply**? : *Function*

*Defined in [types.ts:41](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L41)*

___

###  asLoader

• **get asLoader**(): *object*

*Defined in [ploadin.ts:53](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L53)*

**Returns:** *object*

* **loader**: *string* = loaderPath

* ### **query**: *object*

  * **classId**: *CId*

  * **instanceId**: *IId*

___

### `Optional` loader

• **loader**? : *[LoaderFunc](../README.md#loaderfunc)*

*Defined in [types.ts:39](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L39)*

___

### `Optional` pitch

• **pitch**? : *[PitchFunc](../README.md#pitchfunc)*

*Defined in [types.ts:40](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/types.ts#L40)*

## Accessors

###  _classId

• **get _classId**(): *[ClassId](../README.md#classid)*

*Defined in [ploadin.ts:42](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L42)*

**Returns:** *[ClassId](../README.md#classid)*

___

###  _instanceId

• **get _instanceId**(): *[InstanceId](../README.md#instanceid)*

*Defined in [ploadin.ts:34](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L34)*

**Returns:** *[InstanceId](../README.md#instanceid)*

___

###  classOptions

• **get classOptions**(): *any*

*Defined in [ploadin.ts:60](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L60)*

**Returns:** *any*

___

### `Static` _classId

• **get _classId**(): *[ClassId](../README.md#classid)*

*Defined in [ploadin.ts:38](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L38)*

**Returns:** *[ClassId](../README.md#classid)*

___

### `Static` asLoader

• **get asLoader**(): *object*

*Defined in [ploadin.ts:46](https://github.com/JuroOravec/ploadin/blob/6c9f70f/src/ploadin.ts#L46)*

**Returns:** *object*

* **loader**: *string* = loaderPath

* ### **query**: *object*

  * **classId**: *CId*

  * **instanceId**: *IId*

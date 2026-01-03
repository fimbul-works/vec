[**@fimbul-works/vec**](README.md)

***

[@fimbul-works/vec](modules.md) / Slerp

# Slerp

Documentation for spherical linear interpolation functions.

## Functions

### slerp()

```ts
function slerp(
   from, 
   to, 
   t): number;
```

Defined in: [slerp.ts:17](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/slerp.ts#L17)

Spherical linear interpolation for angles (in radians).
Handles wrapping around 2π correctly.

#### Parameters

##### from

`number`

Start angle in radians

##### to

`number`

End angle in radians

##### t

`number`

Interpolation factor (0-1)

#### Returns

`number`

Interpolated angle

***

### slerpDegrees()

```ts
function slerpDegrees(
   from, 
   to, 
   t): number;
```

Defined in: [slerp.ts:27](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/slerp.ts#L27)

Spherical linear interpolation for angles (in degrees).

#### Parameters

##### from

`number`

Start angle in degrees

##### to

`number`

End angle in degrees

##### t

`number`

Interpolation factor (0-1)

#### Returns

`number`

Interpolated angle

/**
 * Define a getter and setter property on an object.
 *
 * @template T - The type of the object to extend
 * @template K - The key of the property to define
 * @template V - The type of the returned value
 * @param {T} obj - The object on which to define the property
 * @param {K} prop - The key of the property to define
 * @param {() => V} get - The getter function
 * @param {(value: V) => void} set - The setter function
 */
export const defineGetSet = <T, K extends keyof T, V = any>(
  obj: T,
  prop: K,
  get: () => V,
  set?: (value: V) => void,
): T =>
  Object.defineProperty(obj, prop, {
    get,
    set,
    enumerable: true,
  });

// NULLISH COALESCING: Nullish coalescing is a relativly new operator that was introduced in ES2020. It is similar to the logical OR operator ||, but it only returns the right-hand side if the left-hand side is null or undefined. This is useful when you want to set a default value for a variable, but you don't want to set it if the variable is 0 or an empty string.

// the nullish coalescing operator ?? returns the right-hand side if the left-hand side is null or undefined while the logical OR operator || returns the right-hand side if the left-hand side is falsy (null, undefined, 0, empty string, NaN, false).
const foo = null ?? "bar";
console.log(foo); // 'bar'

const foo2 = 0 ?? "bar";
console.log(foo); // 0

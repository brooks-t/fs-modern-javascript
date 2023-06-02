// ARRAY TRICKS: useful techniqus for working with JS arrays

// the old fashioned way of creating an array.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// create an array with 100 elements
const arr2 = Array(100)
	.fill(0)
	.map((_, i) => i + 1);
console.log(arr);

// create an array with 100 elements with the values 0 to 99
const arr3 = [...Array(100).keys()];

// remove duplicates from an array
const unique = [...new Set(arr)];

// get a random element
const random = arr[Math.floor(Math.random() * arr.length)];

for (const val of arr) {
	console.log(val);
}

// loop over a key-value pair
for (const [index, val] of arr.entries()) {
	console.log(index, val);
}

// array methods to study further
arr.forEach();
arr.map();
arr.filter();
arr.reduce();
arr.every();
arr.some();
arr.find();
arr.findIndex();

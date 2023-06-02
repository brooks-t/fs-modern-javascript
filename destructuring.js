// Destructing is a way to extract data from arrays and objects into distinct variables. It's more concise than the traditional way of extracting data from arrays and objects through dot notation or bracket notation.

const dog = {
	name: "doggo",
	breed: "labrador",
	age: 5,
	bark() {
		console.log("woof woof");
	},
};

// const name = dog.name;
// const breed = dog.breed;
// const age = dog.age;

const { name, breed } = dog; // destructuring, 1 line instead of 2

const { age: yearsOld } = dog; // destructuring with alias, rename age to yearsOld

// You can also use destructuring on arrays
const dogs = ["labrador", "golden retriever", "french bulldog"];
const [firstDog, secondDog, thirdDog] = dogs; // destructuring, 1 line instead of 3, note: the variable names must match the order of the array

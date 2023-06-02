// OPTIONAL CHAINING
// Optional chaining ? is a relatively new operator that was introduced in ES2020. It allows you to call object properties safely, without throwing an error. When calling properties without this operator, you many crash your applcation with the error Cannot read property 'foo' of undefined.

const person = {
	age: 20,
	address: {
		street: "1234 First Street",
		city: "Burbank",
		state: "CA",
		zipCode: "12345",
	},
};

const dude1 = person.name;
console.log(dude1.address.school); // error Cannot read property 'school' of undefined

const dude2 = person.address?.school; // undefined
console.log(dude2);

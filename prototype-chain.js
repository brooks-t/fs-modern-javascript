// Description: Prototype chain - prototype inheritance

const animal = {
	dna: 123,
	legs: {
		front: 2,
		back: 2,
	},
	sleep() {
		console.log("zzz");
	},
};

const p1 = Object.getPrototypeOf(animal); // get the prototype of animal which is Object.prototype. Object.prototype is the parent of all objects
console.log(p1);

const p2 = Object.getPrototypeOf(p1);
console.log(p2); // null - end of the prototype chain, no more parents

const dog = {
	bark() {
		console.log("woof");
	},
};

Object.setPrototypeOf(dog, animal); // set animal as the prototype of dog
console.log(dog.dna);

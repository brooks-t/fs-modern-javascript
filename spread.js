const obj1 = {
	first: "a",
	second: "b",
	third: "c",
};

const obj2 = {
	third: "d",
	fourth: "e",
};

// this takes a copy of obj1 and adds obj2 to it. the last argument will take higher priority
const full = Object.assign({}, obj1, obj2);

// a more concise way to write the above code is to use the spread operator
const full2 = { ...obj1, ...obj2 };


// you could also merge obj1 directly into obj2 or create a new obj3 like below
// remember the last argument will take higher priority, so if you want obj1 to take higher priority, you need to put it as the last argument
const obj3 = {
    ...obj1,
    third: "d",
    fourth: "e",
}

// More examples
const obj = { 
    foo: 1, 
    bar: 2, 
    baz: 3 
};
const newObj = {
    foo: 4
    ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }

// It's also useful for combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
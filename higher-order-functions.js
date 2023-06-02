// HIGHER ORDER FUNCTIONS: A higher order function is a function that takes a function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.
// As a general rule, Jeff uses declarations for global functions and expressions for local functions.

// A function that takes a function as an argument
function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function math(x, y, operator) {
	return operator(x, y);
}

math(5, 2, add); // 7

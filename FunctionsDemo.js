// Function : Function is the Block of the Code
// It can be created once reuse

// 1) Simple Function:
function greet() {
  console.log("Hello Everyone");
}
greet();

// 2) Function with Parameter:
function greet(name) {
  console.log("Hello " + name);
}
greet("Aditya");

// 3) Function with return value:

function sum(a, b) {
  return a + b;
}
console.log("addition of two numbers: " + sum(10, 12));

// 4) 4. Function Expression (Anonymous Function):

let substraction = function (a, b) {
  return a - b;
};

console.log("Substraction of two numbers: " + substraction(40, 20));

// 5. Arrow Functions (ES6+ Syntax)

let divide = (a, b) => {
  return a / b;
};

console.log("Division of two numbers: " + divide(40, 20));

// 6) Shorter version for one-line return:
let cube = (x) => x * x * x;
console.log("Cube of the numbers: " + cube(3));

// 7) Default Parameter in greet:

function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet("Aditya");
greet();

// 8) Rest Parameters (...args)
function sumall(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log("Sum of all Numbers : " + sumall(5, 4, 8, 5, 4));

// 9) CallBack of functions:

function guests(CallBack) {
  console.log("hI");
  CallBack();
}

function greetings() {
  console.log("Hiii");
}
guests(greetings);

// 10) Nested Functions:

function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}

outer();

// Invoked Function :(Runs Faster) 

(function tables() {
  let num = 2;
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
})

();



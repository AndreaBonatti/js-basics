function greet() {
  // body
  console.log("Hello World");
}
// function declaration does not need to end with a ; because is not a statement

greet(); // to call a function we use a statement => semicolon at the end

// e.g. function with a variable
function greet(name) {
  // name is a parameter
  console.log("Hello " + name);
}

greet("Mosh"); // "Mosh" is an argument (actual value of a parameter)
greet("Mary");

// e.g. function with 2 variables
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");

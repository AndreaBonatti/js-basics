let person = {
  name: "Mosh",
  age: 30,
}; // {} Object literal, this is an object with two properties

console.log(person);

// Dot notation
person.name = "John";

console.log(person.name);

// Bracket notation
person["name"];

console.log(person["name"]);

// Dot notation is more compact and concise => default choice
// If we have the parameter selection at run-time => is better to use the bracket notation
// e.g. let selection = 'name' => console.log(person[selection])

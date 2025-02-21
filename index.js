// let selectedColors = []; // [] array literal, empty array
let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = "gray";
console.log(selectedColors);
// objects and size of arrays are dynamic
selectedColors[3] = 1;
console.log(selectedColors);
// an array is an object, so it has properties that we can access with the dot notation
console.log(selectedColors.length);

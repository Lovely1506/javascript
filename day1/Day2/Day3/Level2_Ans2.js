let sideA = prompt('Enter side A:5 ');
let sideB = prompt('Enter side B: 4 ');
let sideC = prompt('Enter side C: 3 ');
//The prompt input returned is a string we need ot convert it to a number for arithmetic calculations
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(perimeter);         //perimeter is 12

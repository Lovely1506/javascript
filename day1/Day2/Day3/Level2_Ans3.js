let length = prompt('Enter length: ');
let width = prompt('Enter width: ');
//The prompt input returned is a string we need ot convert it to a number for arithmetic calculations
let perimeter = 2 * (parseFloat(length) + parseFloat(width));
let area = parseFloat(length) * parseFloat(width);
console.log(perimeter, area);

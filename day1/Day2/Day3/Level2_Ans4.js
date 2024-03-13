let radius = prompt('Enter radius: ');
let pi = Math.round(Math.PI * 100) / 100; // same as 3.14
let area = pi * parseFloat(radius) ** 2;
let circumference = 2 * pi * parseFloat(radius);
console.group(area, circumference);

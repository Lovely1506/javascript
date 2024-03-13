
let a = 1, b = 2, c = -2;
let a1 = a / a,b1 = b / a, c1 = c / a;
let x_intercept = -c1 / b1;
console.log(x_intercept);     1
let y_intercept = c1 / a1; 
console.log(y_intercept);   2
let slope = Math.round(((y_intercept - 0) / (0 - x_intercept)) * 100) / 100;
let slope1 = Math.round(((0 - y_intercept) / (x_intercept - 0)) * 100) / 100;
console.log(slope);
console.log(slope1);  2

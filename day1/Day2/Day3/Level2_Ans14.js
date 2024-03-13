let age = parseFloat(prompt('Enter your age: '));
let remainingYears = 100 - age;
// remainingYears * 365.25days * 24hours * 60minutes * 60seconds
let remainingSeconds = remainingYears * 365.25 * 24 * 60 * 60;
console.log(
  `You have lived ${
    age * 365.25 * 24 * 60 * 60
  } seconds. You have ${remainingSeconds} seconds more to live reach 100 years`
);

var text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Using regular expression to extract numbers
var numbers = text.match(/\d+/g);

// Converting extracted numbers to integers and calculating total annual income
var totalIncome = 0;
numbers.forEach(function(number) {
    totalIncome += parseInt(number);
});

// Assuming the income is monthly and the bonus is annual, so we multiply bonus by 12
totalIncome += parseInt(numbers[1]) * 12;

console.log("Total annual income:", totalIncome, "euro");

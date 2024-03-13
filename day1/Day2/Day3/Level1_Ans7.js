const now = new Date();

// 1. What is the year today?
const year = now.getFullYear();

// 2. What is the month today as a number? (0-indexed, so January is 0)
const month = now.getMonth() + 1; // Adding 1 to get a 1-indexed month

// 3. What is the date today?
const date = now.getDate();

// 4. What is the day today as a number? (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const day = now.getDay();

// 5. What is the hours now?
const hours = now.getHours();

// 6. What is the minutes now?
const minutes = now.getMinutes();

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsSince1970 = Math.floor(now.getTime() / 1000); // Converting milliseconds to seconds

console.log("1. Year:", year);
console.log("2. Month (as a number):", month);
console.log("3. Date:", date);
console.log("4. Day (as a number):", day);
console.log("5. Hours:", hours);
console.log("6. Minutes:", minutes);
console.log("7. Seconds since January 1, 1970:", secondsSince1970);

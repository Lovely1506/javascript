const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

//  Clean the text by removing special characters and punctuation
const cleanedText = sentence.replace(/[^\w\s]/gi, '');

//  Split the cleaned text into an array of words
const words = cleanedText.split(/\s+/);

//  Count the occurrences of each word
const wordCount = {};
words.forEach(word => {
    word = word.toLowerCase();
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
});

//Find the word with the highest frequency
let mostFrequentWord = '';
let maxCount = 0;
for (const word in wordCount) {
    if (wordCount[word] > maxCount) {
        mostFrequentWord = word;
        maxCount = wordCount[word];
    }
}

console.log("Most frequent word:", mostFrequentWord);   // i
console.log("Frequency:", maxCount);  // 3

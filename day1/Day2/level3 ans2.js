let sentence ='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.match(/because/gi));  ['because','because','because']
console.log(sentence.match(/because/gi).length);   //3
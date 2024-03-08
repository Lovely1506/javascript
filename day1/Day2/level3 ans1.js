let sentence ='Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence.match(/love/gi));  ['Love','Love','Love']
console.log(sentence.match(/love/gi).length);   //3
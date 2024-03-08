let language ='python' ,notlanguage ='jargon';
console.log(language.includes('on') && notlanguage.includes('on'));  //true
console.log(/on/g.test(language) && /on/g.test(notlanguage));  //true
/*i.*/ console.log(4 > 3 && 10 < 12);  true             
/*ii.*/ console.log(4 > 3 && 10 > 12);   true       
/*iii.*/ console.log(4 > 3 || 10 < 12);    false        
/*iv.*/ console.log(4 > 3 || 10 > 12);    false       
/*v.*/ console.log(!(4 > 3));   true         
/*vi.*/ console.log(!(4 < 3));   true      
/*vii.*/ console.log(!(false));  false       
/*viii.*/ console.log(!(4 > 3 && 10 < 12));  false      
/*ix.*/ console.log(!(4 > 3 && 10 > 12));  false      
/*x.*/ console.log(!(4 === '4'));    false       
//There is no 'on' in both dragon and python
let lang ='python';
console.log(lang.length);   6
let notlang ='jargon'
console.log(notlang.length);   6
//make a falsy comparison
console.log(lang.length!= notlang.length);  false
// one linear falsy comparison 
console.log('python'.length !='jargon'.length);   false
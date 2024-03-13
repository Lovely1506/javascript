/*i.*/ console.log(4 > 3);  true             
/*ii.*/ console.log(4 >= 3);   true       
/*iii.*/ console.log(4 < 3);    false        
/*iv.*/ console.log(4 <= 3);    false       
/*v.*/ console.log(4 == 4);   true         
/*vi.*/ console.log(4 === 4);   true      
/*vii.*/ console.log(4 != 4);  false       
/*viii.*/ console.log(4 !== 4);  false      
/*ix.*/ console.log(4 != '4');  false      
/*x.*/ console.log(4 == '4');    false     
/*xi.*/ console.log(4 == '4');   false     
//lastly python and jargon and make a falsy comparison statement
let lang ='python';
console.log(lang.length);   6
let notlang ='jargon'
console.log(notlang.length);   6
//make a falsy comparison
console.log(lang.length!= notlang.length);  false
// one linear falsy comparison 
console.log('python'.length !='jargon'.length);   false
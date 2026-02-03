const superhero=['superman','badman','spiderman'];
const var1=['abc','xyz']

superhero.push(var1);
console.log(superhero);
console.log(superhero.length)

console.log(superhero[3]);
console.log(superhero[3][1]);

//array concat : 
const arr=[superhero.concat(var1)];
console.log(arr)
const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5,]]];
console.log(arr1)
 const arr2=[arr1.flat(Infinity)]
console.log(arr2)

const arr3=[arr2.flat(Infinity)];
console.log(arr3)

//flat how deep nested array should be flatted default value is one 
//Infinity : flatten all level no matter has deep
//flat does not change original array it return a new array 
//

//data scripting using these method

console.log(Array.isArray('superhero'));//check the given value is array or not

console.log(Array.from("prathmesh"));//convert and iteratable object  into array

console.log(Array.from({'name': 'prat'}))


console.log(Object.keys({'name': 'prat'}))
console.log(Object.values({'name': 'prat'}))
console.log(Object.entries({'name': 'prat'}))

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of([score1,score2,score3]));

//convert value and conver 
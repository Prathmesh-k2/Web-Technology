// symbol  example   : 
const   anotherid =Symbol("123");
console.log(anotherid);

const id=123;
console.log(id===anotherid);

//js is  dynaminc  
// Array
const bike=['ktm','gt5','royal enfild 350',]
const num=[ 1,2,3,4];
console.log(bike);
console.log(num)
//object  key and value pair

const myobj= {
    fname :" python",
    age :20
};

console.log(myobj)
//function

function sum(a,b){

    return a+b
  
}
console.log(sum(10,58))

//let str 
let str="prathmesh";
console.log(typeof(str))

//string interpulotion
console.log(`hello  i am ${str}`)

const gamecount=new String("Prathmesh");
  console.log(gamecount.length);
  console.log(gamecount.toUpperCase());
  console.log(gamecount.toLowerCase());
  console.log(gamecount.charAt(2));
    console.log(gamecount.indexOf(`t`));

//function  string method
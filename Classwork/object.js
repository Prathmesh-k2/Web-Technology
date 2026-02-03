let myobj ={
    name :"asw",
    age:20,
    location: "wardha",
    email :"aw@gmail.com",
    islogin :true,
    lastloginDate: ["mon","thu","wed",],//obj literal :key value pair
   //[ mySymbol ]:"abc"

}
// 1st is obj declare  3 way
//1 literal  ,constructor and singltance 
//when you create literal not 
//when we  create 

//console.log(myobj.fullname)
// console.log(myobj.email)
// console.log(typeof(myobj[mySymbol]))

//symbol e,g

const  mySymbol = Symbol("js");

const myobj2 = {
   [mySymbol]: "Avw",
};
console.log(myobj2)
console.log(typeof(myobj2));

myobj.email="w@gmail.com";
console.log(myobj.email)

//Object.freeze(myobj)
myobj.email="aw@gmail.com";
console.log(myobj.email)

myobj.greeting = function (){
    console.log("Hello js user")
};
myobj.greeting();

const user=new Object
console.log(user)
const user1={};//non singletan object 
user1.id=12345;
user1.name="abc";
user1.islogin=true
console.log(user1)

//object inside the object 
const user3={
    email:"ansijd",
    username:
{
    fullname:{lname:"tiger killer",fname:"ash"}    
}
}
console.log(user3.username.fullname)
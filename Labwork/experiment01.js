/*************************************************
 * JavaScript Practical Program
 * Activity-wise Implementation
 *************************************************/


/*===============================================
  Activity 0: var, let and const Demonstration
===============================================*/
// console.log("Activity 0: var, let and const Demonstration");

// const a = 10;
// // a = 20;  // ❌ Error: Assignment to constant variable
// console.log("Constant a =", a);

// var c = 20;
// let d = 40;

// console.log("Initialization");
// console.log("c =", c, "d =", d);

// {
//     var c = 50;      // var has function scope
//     let d = 100;     // let has block scope
//     console.log("Inside the scope");
//     console.log("c =", c, "d =", d);
// }

// console.log("Outside the scope");
// console.log("c =", c, "d =", d);

// document.write("<h3>Activity 0: var, let and const</h3>");
// document.write("Constant a = " + a + "<br>");
// document.write("Outside Scope → c = " + c + ", d = " + d + "<br><br>");



/*===============================================
  Activity 1: Student Information with Data Types
===============================================*/
console.log("Activity 1: Student Information");

let name = "prathmesh kokare";
let age = 20;
let prn = "23UAM059";
let account_no = null;
let address;

console.log("Name :", name, );
console.log("Age :", age, );
console.log("PRN :", prn, );
console.log("Address :", address, );

document.write("<h3>Activity 1: Student Information</h3>");
document.write("Name : " + name + "<br>");
document.write("Age : " + age + "<br>");
document.write("PRN : " + prn + "<br>");
document.write("Address : " + address + "<br><br>");



/*===============================================
  Activity 2: Odd or Even using if-else
===============================================*/
console.log("Activity 2: Odd or Even Check");

let num = 19;

if (num % 2 === 0) {
    console.log(num, "is Even");
    document.write("<h3>Activity 2: Odd or Even</h3>");
    document.write(num + " is Even<br><br>");
} else {
    console.log(num, "is Odd");
    document.write("<h3>Activity 2: Odd or Even</h3>");
    document.write(num + " is Odd<br><br>");
}



/*===============================================
  Activity 3: Print Numbers 1 to 10 using for loop
===============================================*/
console.log("Activity 3: Numbers from 1 to 9");

document.write("<h3>Activity 3: Numbers from 1 to 9</h3>");

for (let i = 1; i <= 9; i++) {
    console.log(i);
    document.write(i + "<br>");
}

document.write("<br>");



/*===============================================
  Activity 4: Pass or Fail Check
===============================================*/
console.log("Activity 4: Pass or Fail");

let marks = 40;

document.write("<h3>Activity 4: Pass or Fail</h3>");

if (marks >= 40) {
    console.log("Result: Pass", marks);
    document.write("Result: Pass (" + marks + ")<br><br>");
} else {
    console.log("Result: Fail", marks);
    document.write("Result: Fail (" + marks + ")<br><br>");
}



/*===============================================
  Activity 5: Value Assignment (Primitive Copy)
===============================================*/
console.log("Activity 5: Value Assignment");

let num1 = 10;
let num2 = num1;   // copy value
num1 = 20;

console.log("num1 =", num1);
console.log("num2 =", num2);

document.write("<h3>Activity 5: Value Assignment</h3>");
document.write("num1 : " + num1 + "<br>");
document.write("num2 : " + num2 + "<br>");

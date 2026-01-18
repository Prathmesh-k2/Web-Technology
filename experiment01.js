// // /*  let const and var

// // */
// // const a=10;
// // //a=20   ---->Assignment to constant variable.
// // console.log(a)

// // //variable decl

// var c=20;
// let d=40;
// console.log("Intilization");
// console.log(c,d);
// {
//    var c = 50;
//    let d = 100;
//    console.log("Inside the scope");
//    console.log(c,d);

// }
// console.log("outside the scope");
// console.log(c,d);

// 1 Student info display
// console .log(" 1.Student info with datatype")
// let name="Prathmesh kokare";
// let age=20;
// let prn="23UAm059";
// let Account_no=null;
// let Address;

// console.log("Name is:",name ,"     ",typeof(name));
// console.log("Age is :",age ,"      ",typeof(age));
// console.log("PRN is:",prn,"       ",typeof(prn));
// console.log("Account Number",Account_no ,"   ",typeof(Account_no));
// console.log("Address",Address,"       ",typeof(Address))
// console.log();
// console.log();


//      Student Information
console.log("1. Student Information");
let name = "Prathmesh Kokare";
let age = 20;
let prn = "23UAM059";
let account_no = null;
let address = "Sangli";

console.log("Name :", name);
console.log("Age :", age);
console.log("PRN :", prn);
console.log("Account Number :", account_no);
console.log("Address :", address);

document.write("<h3>1. Student Information</h3>");
document.write("Name : " + name + "<br>");
document.write("Age : " + age + "<br>");
document.write("PRN : " + prn + "<br>");
document.write("Account Number : " + account_no + "<br>");
document.write("Address : " + address + "<br><br>");


// odd even
console.log("2. Odd Even Check using if-else");

document.write("<h3>2. Odd Even Check using if-else </h3>");

let num = 19;

if (num % 2 === 0) {
    console.log("Even Number :", num);
    document.write("Even Number : " + num + "<br><br>");
} else {
    console.log("Odd Number :", num);
    document.write("Odd Number : " + num + "<br><br>");
}


//loop
console.log("3. Print numbers from 1 to 10 using for loop");
document.write("<h3>3.Print numbers from 1 to 10 using for loop</h3>");

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i + "<br>");
}

document.write("<br>");
console.log("4. Pass or Fail Check");
document.write("<h3>4. Pass or Fail</h3>");

let marks = 40;

if (marks >= 40) {
    console.log("Congratulations! You are Pass :", marks);
    document.write("Congratulations! You are Pass : " + marks + "<br>");
} else {
    console.log("You are Fail :", marks);
    document.write("You are Fail : " + marks + "<br><br>");
}

//5
console.log("5. Value Assignment ");

let num1 = 10;
let num2 = num1;
num1 = 20;
console.log("num1 :", num1);
console.log("num2 :", num2);

document.write("<h3>5. Value Assignment</h3>");
document.write("num1 : " + num1 + "<br>");
document.write("num2 : " + num2 + "<br>");
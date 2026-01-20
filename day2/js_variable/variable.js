//var let and const

// 1. const 
const name = "rajnish" // ek baar declare karne ke baad change nahi kar sakte hai , reassign nahi kar sakte hai 
// agra mujhe kahi  iss naam ko access karna hai toh mai 
// mai name ka use kar ke access kar sakta hu
console.log(name)
// agar hum console.log("name") toh output name 
// aur without console.log(name) denge toh rajnish agega
// agr change karnenge toh "ERROR" milega.
// const ka use waha hota hai humme me program me variable ki value change nahi karna hai .


// 2. let
let phone = " iphone" 
// reassign ho sakta hai . for example 
// redeclare nahi hota hai . for example 
//let phone = "your" // error dega 
phone = " mera" 
console.log(phone);

//3. var 
// aab var ka use karne ke mana hota kunki kuch bugs hai iss me 
// reccommend kar te hai ki { let ya const ka use karo} 
var  pc = "raj"
// reassign kar sakte hai 
pc = "mera"
// redeclare bhi kar sakte hai 
var pc = "hum"
console.log(pc);


//{}  iss hum scope bolte hai 
// fuction(){}  iss se hum function bolte hai 
let mouse = "zeb"
{
    mouse = "apple" // reassign kiya hai 
    console.log(mouse);// apple - output 
    
}
console.log(mouse); // apple - output 


let mouse1 = "zeb" // agra hum redeclare karte hai scope me toh error nahi aata hai .
{ // yeh block scope bolte hai 
     let mouse1 = "apple" // redeclare  kiya hai 
    console.log(mouse1);// apple - output 
    
}
console.log(mouse1); // zeb - output 

// function1(){
// }  isse funtional scope bolte hai 


// agra {} "scope ka use " var ke sath ho toh 
var mouse22 = "zeb2"
{
    mouse23 = "apple2" // redeclare kiya hai 
    console.log(mouse23);// apple - output 
    
}
console.log(mouse22); // apple - output 


var mouse5 = "zeb23"
{
  var mouse4 = "apple23" // reassign kiya hai 
    console.log(mouse4);// apple - output 
    
}
console.log(mouse5); // zeb - output 



//notes
// var: Works in the whole function, not limited to blocks.
// let: Works only inside the block {} where it is written.
// const: Same as let, but its value cannot be changed.
// Block scope: Variable is usable only inside {}.
// Function scope: Variable is usable everywhere inside the function.


// const ka use in scope block
const bottle = " glass"
{
    const pen = "blue"
    console.log(pen);
    
}
//console.log(pen); // error show karega kyunki scope ka khatam hua uske sath hee 
//pen bhi khatam hho jayega
console.log(bottle);


// naming rules👇
// 👉 must start from a LETTER , UNDERSCORE (__) or  DOLLAR SIGN ($)
// CASE SENSITIVE HOTA HAI  AGAR APNE (name ko Name ayese bhi likh diya toh bhi farak padega )  
// agar lowercase me likha hai toh lowercase me hee follow karo warna 
// warna UPPERCASE ME KIYA HAI USS ME HEE FOLLOW KARO 
// RESERVED KEYWORD KA ISSTEMALL / USE NAHI KARSAKTE HAI FOR EXAMPLE 
 
//👇
//let const = "nore" // show error because we are using reserved keywords.


//DYNAMIC TYPING so varible can chnage on runtime matlab ki int char aur variable change ho jayega 

                //   Difference between var, let, and const

//   | Feature   | `var`           | `let`           | `const`      |
// | --------- | --------------- | --------------- | ------------ |
// | Scope     | Function scope  | Block scope     | Block scope  |
// | Redeclare | Yes             | No              | No           |
// | Reassign  | Yes             | Yes             | No           |
// | Hoisting  | Yes (undefined) | Yes (TDZ)       | Yes (TDZ)    |
// | Use case  | Old JavaScript  | Changing values | Fixed values |



// HOW TO MAKE TABLE IN JAVASCRIPT 
//table 
let name5 = "raj"
let age = "21"
let subject = "js"
location = "india"

console.log(location); // ayese ek ek kar ke print karne me problem hoga uss se acha 
// ye karo 👇
console.table([ name5, age , subject , location])


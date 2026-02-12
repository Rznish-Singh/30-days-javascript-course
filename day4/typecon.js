//type conversion - explicit type conversion ya type casting kehte hai, jisme hum ek data type ko dusre data type me convert karte hai. JavaScript me kuch built-in functions hote hai jo type conversion ke liye use kiye jate hai, jaise String(), Number(), Boolean() etc.
//string conversion - String() function ka use krke number, boolean, null ko string me convert kr skte hai
// 1. number to string
let num = 123;
let str = String(num);
console.log(str); // "123"
console.log(typeof num); // "number"
console.log(typeof str); // "string"

// 2. boolean to string
let bool = true;
let boolStr = String(bool);
console.log(boolStr); // "true"
console.log(typeof bool); // "boolean"
console.log(typeof boolStr); // "string"

// 3. null to string
let nullValue = null;
let nullStr = String(nullValue);
console.log(nullStr); // "null"
console.log(typeof nullValue); // "object"
console.log(typeof nullStr); // "string"



//number conversion - number() fuction ka use krke string ko number me convert kr skte hai 
// 1. string to number
let Num1 = "456abc"; // agar string me non-numeric characters hai to number conversion me error aayega aur result NaN (Not a Number) hoga
let num2= Number(Num1);
console.log(num2); // 456 not a number
console.log(typeof Num1); // "string"
console.log(typeof num2); // "number"

// 2. boolean to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 3. null to number
console.log(Number(null)); // 0

//4. undefined to number
console.log(Number(undefined)); // NaN

//"123" -> 123 , "123abc" -> NaN, true -> 1, false -> 0, null -> 0, undefined -> NaN

//boolean conversion - Boolean() function ka use krke string, number, null ko boolean me convert kr skte hai
// 1. string to boolean
let str1 = "hello";
let bool1 = Boolean(str1);
console.log(bool1); // true

let str2 = "";
let bool2 = Boolean(str2);
console.log(bool2); // false

// 2. number to boolean
let num3 = 0;
let bool3 = Boolean(num3);
console.log(bool3); // false

let num4 = 123;
let bool4 = Boolean(num4);
console.log(bool4); // true

// yeh karoge toh false ayega result
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// yeh karoge toh true ayega result
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)

//1-> true , {} -> true , "hello" -> true [] -> true, or bachi hui sabhi values true hoti hai boolean conversion me except 0, "", null, undefined, NaN
//0-> false , "" -> false, null -> false, undefined -> false, nan -> false  

// type conversion ke rules - JavaScript me type conversion ke kuch rules hote hai, jaise agar hum ek number ko string me convert karte hai to uske aage aur peeche ke spaces remove ho jate hai,
//  agar hum ek boolean ko number me convert karte hai to true ka result 1 hota hai aur false ka result 0 hota hai, agar hum ek null value ko number me convert karte hai to uska result 0 hota hai,
//  agar hum ek undefined value ko number me convert karte hai to uska result NaN hota hai.



// type coercion - type coercion ka matlab hai ki JavaScript me jab hum ek expression me different data types ko use karte hai to JavaScript automatically unhe convert kar deta hai.
//  Jaise agar hum ek number aur ek string ko add karte hai to JavaScript us number ko string me convert kar deta hai aur dono ko concatenate kar deta hai. Agar hum ek boolean aur ek number ko add karte hai to JavaScript us boolean ko number me convert kar deta hai aur dono ko add kar deta hai. 
// Type coercion ke rules bhi hote hai, jaise agar hum ek number aur ek string ko add karte hai to JavaScript us number ko string me convert kar deta hai, agar hum ek boolean aur ek number ko add karte hai to JavaScript us boolean ko number me convert kar deta hai, 
// agar hum ek null value aur ek number ko add karte hai to JavaScript us null value ko 0 me convert kar deta hai, agar hum ek undefined value aur ek number ko add karte hai to JavaScript us undefined value ko NaN me convert kar deta hai.

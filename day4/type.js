// type coercion - type coercion ka matlab hai ki JavaScript me jab hum ek expression me different data types ko use karte hai to JavaScript automatically unhe convert kar deta hai.
//  Jaise agar hum ek number aur ek string ko add karte hai to JavaScript us number ko string me convert kar deta hai aur dono ko concatenate kar deta hai. Agar hum ek boolean aur ek number ko add karte hai to JavaScript us boolean ko number me convert kar deta hai aur dono ko add kar deta hai. 
// Type coercion ke rules bhi hote hai, jaise agar hum ek number aur ek string ko add karte hai to JavaScript us number ko string me convert kar deta hai, agar hum ek boolean aur ek number ko add karte hai to JavaScript us boolean ko number me convert kar deta hai, 
// agar hum ek null value aur ek number ko add karte hai to JavaScript us null value ko 0 me convert kar deta hai, agar hum ek undefined value aur ek number ko add karte hai to JavaScript us undefined value ko NaN me convert kar deta hai.


//string conversion -> + operator ka use krke number aur boolean ko string me convert kr skte hai
console.log(4 + "15"); // "415"
console.log(true + " is a boolean"); // "true is a boolean"
console.log(2+5+4+"hello"); // "11hello" 
// yeh karoge toh "11hello" ayega result kyunki pehle 2+5+4 ka result 11 aayega aur phir usko string me convert kar ke "11hello" ban jayega
console.log("hello" + 2 + 5 + 4); // "hello254"
// yeh karoge toh "hello254" ayega result kyunki pehle "hello" + 2 ka result "hello2" aayega aur phir usko string me convert kar ke "hello25" ban jayega aur phir usko string me convert kar ke "hello254" ban jayega

// number conversion  -> *  operator ka use krke string, boolean, null, undefined ko number me convert kr skte hai
console.log("123" * 1); // 123
console.log("123abc" * 1); // NaN
console.log("abc" * "djk"); // NaN
console.log("abc" * "123"); // NaN
console.log("156" * "123"); // 19188
console.log(true * 1); // 1
console.log(false * 1); // 0
console.log(null * 1); // 0
console.log(undefined * 1); // NaN

// number conversion  -> - operator ka use krke string, boolean, null, undefined ko number me convert kr skte hai
console.log("123" - 1); // 122
console.log("123abc" - 1); // NaN
console.log("abc" - "djk"); // NaN
console.log("abc" - "123"); // NaN
console.log("156" - "123"); // 33
console.log(true - 1); // 0
console.log(false - 1); // -1
console.log(null - 1); // -1
console.log(undefined - 1); // NaN

// number conversion  -> / operator ka use krke string, boolean, null, undefined ko number me convert kr skte hai
console.log("123" / 1); // 123
console.log("123abc" / 1); // NaN
console.log("abc" / "djk"); // NaN
console.log("abc" / "123"); // NaN
console.log("156" / "123"); // 1.2682926829268293
console.log(true / 1); // 1
console.log(false / 1); // 0
console.log(null / 1); // 0
console.log(undefined / 1); // NaN

// number conversion  -> % operator ka use krke string, boolean, null, undefined ko number me convert kr skte hai
console.log("123" % 1); // 0
console.log("123abc" % 1); // NaN
console.log("abc" % "djk"); // NaN
console.log("abc" % "123"); // NaN
console.log("156" % "123"); // 33
console.log(true % 1); // 0
console.log(false % 1); // 0
console.log(null % 1); // 0
console.log(undefined % 1); // NaN

// number conversion  -> ** operator ka use krke string, boolean, null, undefined ko number me convert kr skte hai
console.log("123" ** 1); // 123
console.log("123" ** 2); // 15129
console.log("123abc" ** 1); // NaN
console.log("abc" ** "djk"); // NaN
console.log("abc" ** "123"); // NaN
console.log("156" ** "123"); // 19188
console.log(true ** 1); // 1
console.log(false ** 1); // 0
console.log(null ** 1); // 0
console.log(undefined ** 1); // NaN

// 3. boolean coersion
if("hello"){
console.log("i am inside if block"); // "i am inside if block"
}

if(0){
console.log("i am inside if block");  // yeh block execute nahi hoga kyunki 0 ko boolean me convert karne par false aayega
// 0-> false , "" -> false, null -> false, undefined -> false, nan -> false
// yeh sab values ko boolean me convert karne par false aayega, aur if block me condition false hone par block execute nahi hota hai  
}
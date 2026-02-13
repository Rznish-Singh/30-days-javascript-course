//javascript operators
//Arithmetic operators (mathematical operations)
// +(add), -(minus), *(multiply), /(divide), %(remainder), **(exponentiation) , ++(increment), --(decrement)

console.log(4 + 5); // 9
console.log(10 - 3); // 7
console.log(6 * 7); // 42
console.log(20 / 4); // 5
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
console.log( 2**2); // 4
let x = 5  ;
console.log(x++); // 5 (postfix-increment, pehle value return karega fir increment karega)
console.log(++x); // 7 (prefix-increment, pehle increment karega fir value return karega)
console.log(x--); // 7 (postfix-decrement, pehle value return karega fir decrement karega)
console.log(--x); // 5 (prefix-decrement, pehle decrement karega fir value return karega)


//Assignment operators (value assign karne ke liye)
// =(assign), +=(add and assign), -=(subtract and assign), *=(multiply and assign), /=(divide and assign), %=(remainder and assign), **=(exponentiation and assign)
console.log("assignment operators");
let y = 10 ;
console.log(y); // 10
y += 5; // y = y + 5 => y = 10 + 5 => y = 15
console.log(y); // 15
y -= 3; // y = y - 3 => y = 15 - 3 => y = 12
console.log(y);// 12
y *= 2; // y = y * 2 => y = 12 * 2 => y = 24
console.log(y); // 24
y /= 4; // y = y / 4 => y = 24 / 4 => y = 6
console.log(y); // 6
y %= 4; // y = y % 4 => y = 6 % 4 => y = 2
console.log(y); // 2
y **= 3; // y = y ** 3 => y = 2 ** 3 => y = 8
console.log(y); // 8

//Comparison operators (value compare karne ke liye) (output true ya false aata hai)
// ==(equal to), ===(strict equal to), !=(not equal to), !==(strict not equal to), >(greater than), <(less than), >=(greater than or equal to), <=(less than or equal to)

console.log("5" == 5); // true (loose equality, type conversion hota hai)
// isliye true aaya kyunki "5" ko number me convert kar ke 5 banaya jayega aur phir 5 == 5 hoga jo true hoga
// our use datatypes se matlab nahi hai , bas value same honi chahiye

console.log("5" === 5); // false (strict equality, type conversion nahi hota hai)
// isliye false aaya kyunki "5" ek string hai aur 5 ek number hai, dono ka type alag hai
// yeh value aur type dono ko compare karta hai, agar value same hai lekin type alag hai toh bhi false return karega


console.log(5 != "5"); // false (loose inequality, type conversion hota hai)
// isliye false aaya kyunki "5" ko number me convert kar ke 5 banaya jayega aur phir 5 != 5 hoga jo false hoga
// aur use datatypes se matlab nahi hai , bas value same honi chahiye


console.log(5 !== "5"); // true (strict inequality, type conversion nahi hota hai)
// isliye true aaya kyunki "5" ek string hai aur 5 ek number hai, dono ka type alag hai
//yeh value aur type dono ko compare karta hai, agar value same hai lekin type alag hai toh bhi true return karega


console.log( 5 !== 6); // true (strict inequality, type conversion nahi hota hai)
// isliye true aaya kyunki 5 aur 6 dono number hai lekin unki value alag hai


//greater than
console.log(5 > 3); // true
console.log(5 > 5); // false
console.log(5 > 6); // false

//less than
console.log(3 < 5); // true
console.log(5 < 5); // false
console.log(6 < 5); // false

//greater than or equal to
console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 >= 6); // false

//less than or equal to
console.log(3 <= 5); // true
console.log(5 <= 5); // true
console.log(6 <= 5); // false

//Logical operators (logical operations ke liye)
// &&(logical AND), ||(logical OR), !(logical NOT)

// and table 
// | A | B | A ∧ B (AND) |
// | - | - | ----------- |
// | 0 | 0 | 0           |
// | 0 | 1 | 0           |
// | 1 | 0 | 0           |
// | 1 | 1 | 1           |

// or table
// | A | B | A ∨ B (OR) |
// | - | - | ----------- |
// | 0 | 0 | 0           |
// | 0 | 1 | 1           |
// | 1 | 0 | 1           |
// | 1 | 1 | 1           |

// not table
// | A | ¬A (NOT) |
// | - | --------- |
// | 0 | 1         |
// | 1 | 0         |
console.log("logical operators");

let a = true;
let b = false;

console.log(a && b); // false (logical AND)
console.log(a || b); // true (logical OR)
console.log(!a); // false (logical NOT)
console.log(!b); // true (logical NOT)


//Bitwise operators (bitwise operations ke liye)
// &(bitwise AND), |(bitwise OR), ^(bitwise XOR), ~(bitwise NOT), <<(left shift), >>(right shift), >>>(unsigned right shift)

console.log("bitwise operators");

let c = 5; // 0101 in binary
let d = 3; // 0011 in binary

console.log(c & d); // 1 (bitwise AND) -> 0001 in binary
console.log(c | d); // 7 (bitwise OR) -> 0111 in binary
console.log(c ^ d); // 6 (bitwise XOR) -> 0110 in binary
console.log(~c); // -6 (bitwise NOT) -> 1010 in binary (two's complement)
console.log(c << 1); // 10 (left shift) -> 1010 in binary
console.log(c >> 1); // 2 (right shift) -> 0010 in binary
console.log(c >>> 1); // 2 (unsigned right shift) -> 0010 in binary

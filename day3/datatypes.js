// variable me data ko store karte hai aab konse se data types hote hai 
// types of data types Primitive (Basic) Data Types  for exmaple = | Data Type      | Description      | Example         |
// | -------------- | ---------------- | --------------- |
// | Integer        | Whole numbers    | `10`, `-5`      |
// | Float / Double | Decimal numbers  | `3.14`, `-0.5`  |
// | Character      | Single character | `'A'`, `'9'`    |
// | Boolean        | True or False    | `true`, `false` |
//Non-Primitive (Derived / Reference) Data Types
//  | Data Type | Description              | Example          |
// | --------- | ------------------------ | ---------------- |
// | Array     | Collection of same type  | `[1,2,3]`        |
// | String    | Sequence of characters   | `"Hello"`        |
// | Structure | Group of different types | `struct Student` |
// | Class     | Blueprint for objects    | `class Car`      |
// | Object    | Instance of a class      | `Car c1`         |
// | Pointer   | Stores address           | `int *p`         |


// Primitive javascript datatypes
//number = number ko store karega 8bytes 
let a = 10 ;
console.log(typeof a); // 'typeof ek function hai jo data ka types bata hai .
console.log(typeof (a));

//2. string
let b = 'rajnish';
console.log(typeof b)
console.log(typeof (b));

//3.boolean matlab hota hai haa ya na (true or false)
let isvaild = true;
let c = false;
console.log(typeof (isvaild));
console.log(typeof (c));

//4. undefine  koi bhi exist karta hai per ussse abhi defined nahi kar sakta hai
let empid ;
let d;
console.log(typeof (empid));
console.log(typeof (d));

//5.null 
let e = null ;
console.log(typeof (e)); //'object' nulll ka type

//6.bigint 
let num = 545644865468654865453333n; // small n likhna padta hai 
console.log(typeof (num));

//7. symbol   kisi vlaue ko unique valude indetity deta hai 
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

//non Primitive Data type
//1.array is me koii bhi data types store kar sakte hai 
let arr = [12, 14 , "yash" , true , 2465546 , 2.6]
console.log(arr)
console.log(typeof arr) // object  hai data types 
// non Primitive Data ka type  object hota hai . 

//2. object 
//12 "hii" 46456 "dbc" true
let user ={
    name :"raj",
    age : 45,
    emid : 1454,
    actno : 456546116,
    isvaliduser: true
}
  user.age = 20
console.log(user);
console.log(typeof user);
console.log(user.age);

// 3. function 
function add(){
    console.log(2 + 4);
}
add();
let abc = function add(){
    console.log(2 + 4);
}

console.log(abc) // iss me pata chal rha hai ki functon hai aur uss function ka naam add hai 
console.log(typeof abc) 
console.log(abc())

// | Category  | Meaning       | Example                 |
// | --------- | ------------- | ----------------------- |
// | Mutable   | Can change    | non primitive data types|
// | Immutable | Cannot change | primitive data types    |


//example primitive data types - immutable 
let s = "raj"
s[0] = "j"
console.log(s[0]) // no change or immutable  (dekhne me lagta hai change hua hai)

//non primitive data types - mutable 
//array mutable
let r = ["raj"]
console.log(r[0])
console.log(r)
r[0] = "s"
console.log(r[0])
console.log(r)
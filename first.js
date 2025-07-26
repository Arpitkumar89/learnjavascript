// variables:-

let a = 20;
let b = 10;
console.log(a);
console.log(b);
const a;
console.log(a);
{
    let a = 11;
    console.log(a);
 }

//  Data types:-(Primitive)
//  (1). Number
 let age = 20; //typeof age = Number
 let price = 59.9; //typeof age = Number
//  (2). String:-
 let fullName = "Arpit"; //typeof fullName = String
 let fullName1 = "Shashi"; //typeof fullName = String
//  (3). Boolean:-
  isfollow = "True"; // typeof isfollow = Boolean
  isfollow1 = "False"; // typeof isfollow = Boolean
//  (4). Undefined:-
 let x; // typeof Undefined when value is not entered in variable then it is undefined.
 let y; // typeof Undefined when value is not entered in variable then it is undefined.
//  (5). Null:-
 let a = Null; // typeof a = Null (object)
 let b = Null; // typeof b = Null (object)
//Optional (6). Bigint:-
 let w = Bigint("2024") // typeof w = Bigint when we print then with number 'n' is print
 let z = Bigint("2025") // typeof z = Bigint when we print then with number 'n' is print
//Optional (7). Symbols:-
 let c = Symbol("Hello!") // typeof c = Symbol 
 let d = Symbol("Hello!") // typeof d = Symbol 

// Data types:-(Non-Primitive)
//(1). Object:- represented by colon (:)
const student = {
    fullName : "Arpit Kumar",
    age : 20,
    cgpa : 8.57,
    isPass : true, 
 }
 console.log(student);
 console.log(student.fullName);
 console.log(student.age);
 console.log(student.cgpa);
 console.log(student.isPass);
// OR
console.log(student["fullName"]);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student["isPass"]);

// Question (1):-
const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
}; 
 console.log(product);
 console.log(product.title);
 console.log(product.rating);
 console.log(product.offer);
 console.log(product.price);
// OR
 console.log(product["title"]);
 console.log(product["rating"]);
 console.log(product["offer"]);
 console.log(product["price"]);

// Question(2):-
const profile = {
    userName : "Arpit KUmar Tiwari",
    isFollow : false,
    followers : 304,
    following : 328,
};
console.log(profile);
console.log(profile.userName);
console.log(profile.isFollow);
console.log(profile.followers);
console.log(profile.following);
// OR 
console.log(profile["userName"]);
console.log(profile["isFollow"]);
console.log(profile["followers"]);
console.log(profile["following"]);
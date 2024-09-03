// console.log('Syed Fawaz \n Ali')
// console.log('Syed Fawaz \t Ali')

// var a=10; //Initilize and declaration
// console.log('var',a);

// a=11; //re-assigning
// console.log(a);

// var a = 10 // have to ask fawaz for more clarification
// function f() {
//       a= 20;
//     console.log(a)
// }
// f();
// console.log(a);

// function letExample() {
//     // console.log(y); // Error: Cannot access 'y' before initialization
//     var y = 10;
//     console.log(y); // Output: 10
//      y =24;
//     if (true) {
//       let y = 20; // Block-scoped variable
//       console.log(y); // Output: 20
//     }
//     console.log(y); // Output: 10 (block-scoped variable does not affect outer variable)
//   }
  
// // console.log(y);
// letExample();

// function constExample() {
//   const z = 10;
//   console.log(z); // Output: 10
// //   z = 20; // Error: Assignment to constant variable
//   if (true) {
//     const z = 30; // Block-scoped constant
//     console.log(z); // Output: 30
//   }
//   console.log(z); // Output: 10 (block-scoped variable does not affect outer variable)
// }
// constExample();
// // Const with objects
// const person = ["Alice",25];
// person[1] = 26; // Allowed: Modifying property of object and arrays
// console.log(person[1]); // Output: 2
// console.log(person);

// function example() {
//   // Using var
//   var x = 10;
//   console.log("var x:", x); // Output: 10
//   if (true) {
//     var x = 20; // Redeclaration in the same scope (function scope)
//     console.log("var x inside block:", x); // Output: 20
//   }
//   console.log("var x after block:", x); // Output: 20 (x is updated globally within the function scope)
//   // Using let
//   let y = 10;
//   console.log("let y:", y); // Output: 10
//   if (true) {
//     let y = 20; // Block-scoped, new y within this block
//     console.log(y);
//   }
// }
// example();
// const x=100;
// console.log(x);

// var a;  // intialization
// a=6; //declaring
// a=7;//reassignimg

// console.log(a);

//types of datatypes


let a = 10;
console.log(a);

 function print() {
    var a = 11;
    console.log(a);
 }
 print();



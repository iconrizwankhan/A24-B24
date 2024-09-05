// function evenCheck(num) {
//     if (num%2==0){
//         console.log("yes");
//     } else {
//         console.log("odd");

//     }
// }
// evenCheck(5);

// import readlineSync from 'readline-sync'
// var getUserRole = function (name, role){
//     name = readlineSync.question('Enter your name: ');
//     role = readlineSync.questionInt('Enter your role: ');

// return;
// }
// console.log(getUserRole());

// namastey();

// function namastey(){
//     console.log('Hello World from India 🇮🇳');}

// let x = "Adnan"; //Global Scope

// function print(a){
//     // a is in Function Level Scope
//     console.log(a) //ist
//     if(a == 10){
//         let b = 'Number is 10'; //Block Level Scope
//         console.log(b); //2nd
//     }
//     var c= 100;
//     c = 400;

//     for( var i =0;i<10;i++){
//         console.log(i);// 0 to 9
//     }
//    console.log(i) // i= 10 or i is undefined
//    console.log(y); //y is undefined
// }

// print(10);

// var y;

// tipper('5');

// function tipper(a){
//     var bill = parseInt(a);   // converting string to number
//     console.log(bill + 5);// adding and printing
//     bigTipper('100');
// }

// // bigTipper('100');

// function bigTipper(a){
//     var bill = parseInt(a); /// converting string to number
//     console.log(bill + 15); // adding and printing
// }

/**
 * Ice cream
 *
 * Big Brother - Feed both of them
 * Middle One - Big brother
 * Yougest One - Big brother and Middle One
 *
 */

// var icecream = "Elder Brothers icecream";
// // console.log('Line number 11', icecream);
// function middleOne() {
//   var icecream = "Middle Brothers Ice cream";
//   console.log("76", icecream); // line 76
 
//   function youngerOne() {
//     var icecream = "Younger brothers Ice cream 🍧";
//     console.log(icecream);// line 80
//   }
//   youngerOne(); // execute
// }

// {} - this is called a scope, it tells the memory to keep reservation in this context.

// middleOne();


// var isEven = (num) => {
//    return (num % 2 == 0 ? console.log('num is even'): console.log('num is odd'));
// }
// isEven(4);

// var result = [2,5,6,8].every((e)=>{
//     return e % 2 === 0;
//  });
//  console.log(result);
 // another way of creating and calling functions after ES6+
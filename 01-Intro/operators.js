//increment  // decrement


//arithmatic Operator
//precedence Operator
//Increment/Decrement Operator
//Comaparison Operator
//logical Operator


// var a=0;
// b=++a;
// console.log(b); //a=a+1;

// var a=-1;
// console.log(a--);
// console.log(a);
// console.log(--a);

// let c = 5;
// let d = --c;  // d is assigned the value of c (which is 5), then c is incremented to 6
// console.log(c); // Output: 6
// console.log(d); // Output: 5

/*
D% = (L  - S)/L  *  100;
*/

// const L=5000, S=4000;
// let discPercent = ((L-S)/L) * 100;
// console.log(`Discont offered is ${discPercent}%`);


// let a=2;
// console.log(5 ^ 10 );


// var a = 10 ; b = '10';
// // console.log(a=b); // reassigning
// console.log(a==b); // comparing values
// console.log(a===b);// strictly comparing values and data type as well
// console.log(a>b);
// console.log(b != a); // Not Equals !=
// console.log(b<a);

// for every comparison conditon/ operation result would be a  boolean

//logical Operator

//AND

/*

A   B   A   &   B
T   F       F
F   T       F     
T   T       T
F   F       F

*/
// And checks for first false statement

// console.log(100 && 40 && "" && 15); // empty
// console.log(100 && 40 && undefined && 15); // undedfined
// console.log(100 && 40 && null && 15); // null
// console.log(100 && 40 && 30); // 30 (if every value is true in nature then it will print last value of Operator)
// console.log(100 && 40 && 0 && 15); // 0

// console.log(null && "" && undefined && false);

//OR 
/*
A   B   A   &   B
T   F       T
F   T       T     
T   T       T
F   F       F
*/
// OR checks for first  True statemnet
// console.log("" || 0 || undefined || null || NaN); 
// console.log("" || "7");
// console.log(100 || 40 || 30 || 15);

//NOT
// console.log(!0);

//Zero Values or Falsy Values 

/*
0
Empty String 
undefined
null
false
NaN
*/


//Biwise XOR to be discussed in Person
// x	y	x XOR y
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0
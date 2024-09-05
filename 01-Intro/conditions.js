// let num = 1;

// if (num % 2 == 0){
//     console.log('Number is Even');
// } else {
//     console.log('Number is Odd');
// }



// let isEmail;
// // let isLogin = true;
// // let isCardInfo = true;

// if (!isEmail){
//     console.log('You are allowed to make a purhase');
// } else {
//     console.log('You do not have authority please check your details.')
// }


// let email = true;
// let facebook = false;
// let gmail = false;

// if (!email || facebook || gmail){
//     console.log('Login Success');
// } else {
//     console.log('Login Denied, Please register');
// }


// let temperature = 25;

// if(temperature > 40){
//     console.log('Summer')
// } else if (temperature < 20){
//     console.log('Winter')
// } else {
//     console.log("normal")
// }

import readlinesync from "readline-sync";
let marks = readlinesync.questionInt("Enter Marks to Check:");
if (marks > 90) {
    console.log("AA");
} else if (marks >= 80) {
    console.log("AB");
} else if (marks >= 70 ) {
    console.log("BB");
} else if (marks >= 60 ) {
    console.log("BC");
} else if (marks >= 50 ) {
    console.log("CC");
} else if (marks >= 40 ) {
    console.log("DD");
} else if (marks <= 390) {
    console.log("FF");
} else {
    console.log("Good luck for your future 👍");
}
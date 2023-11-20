//if else chapter 12,13
//Q=1
// let character = prompt();
// if (character == "A=65") {
//   alert("uppercase ok");
// } else if (character == "Z=90") {
//   alert("uppercase ok");
// } else if (character == "a=97") {
//   alert("lowercase ok");
// } else if (character == "z=122") {
//   alert("lowercase ok");
// } else {
//   alert("not mentioned");
// }

//Q=2
let score = 50;
let goal = 50;
if (score == goal) {
  alert("<h1>score and goal are equals</h1>");
} else {
  alert("<h1>score and goal are not equals</h1>");
}

//Q=3
let num1 = prompt();
if (num1 > 0) {
  document.write("positive");
} else if (num1 < 0) {
  document.write("nagitive");
} else if (num1 == 0) {
  document.write("Zero");
} else {
  alert("apki matloba value nahi hai");
}

//Q=4
let ch = prompt();
if (ch == "i" || ch == "e") {
  console.log(true);
} else {
  console.log(false);
}

//Q=5

let FirstPassword = 62330;
let userpassword = +prompt();
if (userpassword !== FirstPassword) {
  alert("“ Please enter your password”");
} else if (userpassword === FirstPassword) {
  alert("“Correct! The password you entered matches the original password”.");
} else {
  alert("“Incorrect password”");
}

//Q=6: This if/else statement does not work. Try to fix it:
/*
var greeting = "Good day";
var hour = 13;
if (hour < 18) {
  alert(greeting);
} else {
  alert("Good evening");
}*/

//Q=7 method 1:

//:Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements.
let time = prompt();

if (time >= 0o00 && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
} else if (time >= 2100 && time < 2359) {
  alert("Good Night!");
} else {
  alert("Time is Wrong!");
}

//Q=7 method 2:
let globalTimeFormat = prompt();
if (globalTimeFormat == "19:00") {
  alert("in globale time Format 7 pm is " + globalTimeFormat);
} else if (globalTimeFormat === "20:00")
  alert("in globale time Format 8 pm is " + globalTimeFormat);
else {
  alert("Not Global Time");
}

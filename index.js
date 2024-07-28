//Q 1. Create an array with the numbers 1 through 10. Write a function to remove all even
// numbers from this array and return the new array.

// Q1 Ans-1 ******************************************************

var input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newarr = [];

const removeEvenNums = (input1) => {
  for (let j = 0; j < input1.length; j++) {
    if (input1[j] % 2 == 1) {
      newarr.push(input1[j]);
    }
  }
  return newarr;
};
const result = removeEvenNums(input1);
console.log(result);

// //Q1 Ans -2 ******************************************************

var input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEvenNums1(arr) {
  return arr.filter((i) => i % 2 == 1);
}

const newarray = removeEvenNums1(input2);
console.log(newarray);

console.log("__________________________________________________________________________________")
// // Q 2. Write a function that takes a string as an argument and returns the number of
// // vowels in the string. Ignore case sensitivity.
// // Input: "Hello World"
// // Output: 3

// // Q 2 Ans

var inputstring = "HellOw World";

const vowelsCount = (string) => {
  let uperStr = string.toUpperCase();
  let count = 0;
  for (let i = 0; i < uperStr.length; i++) {
    // console.log(uperCasestr[i]);
    if (
      uperStr[i] === "A" ||
      uperStr[i] === "E" ||
      uperStr[i] === "I" ||
      uperStr[i] === "O" ||
      uperStr[i] === "U"
    ) {
      count++;
    }
  }
  return count;
};

const result2 = vowelsCount(inputstring);
console.log(`Vowel Count is ${result2} in ${inputstring}`);

console.log(
  "__________________________________________________________________________________"
);

// Q3. Write a for loop that prints the first 10 Fibonacci numbers.
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34



// Q9. Write a function that takes a score (0-100) and returns the corresponding grade (A,
//     B, C, D, F) based on standard grading scale. Use a switch statement with a default
//     case for invalid scores.
//     Input: 85
//     Output: B

var marks = -10;
function grade(marks) {
  switch (true) {
    case marks > 85 && marks <= 100:
      return "A";
      break;
    case marks > 75 && marks <= 85:
      return "B";
      break;
    case marks > 65 && marks <= 75:
      return "C";
      break;
    case marks > 35 && marks <= 65:
      return "D";
      break;
    case marks >= 0 && marks <= 35:
      return "F";
      break;
    default:
      return "not showing because Score Entered is not valid please enter score from 0 to 100.";
  }
}
const output = grade(marks);

console.log(`Your Grade is ${output}`);



console.log("__________________________________________________________________________________")


// Q10. Write a function that takes an array of strings and returns an object where the
// keys are the strings and the values are the lengths of those strings. The function
// should exclude strings that have a length of 3 or less.
// Input: ["apple", "bat", "car", "dolphin"]
// Output: {"apple": 5, "dolphin": 7}


// var input = ["apple", "bat", "car", "dolphin","banana"]
// var fruits = {}

//     for(value of input){
//         console.log(value.length)
//         {fruits.fruit=value
//         fruits.size=value.length
//         console.log(fruits)}
//         if(value.length>3){
//             fruits=value
//             fruits=value.length
//             console.log(fruits)
//         }
//     }


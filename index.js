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

// // //Q1 Ans -2 ******************************************************

var input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEvenNums1(arr) {
  return arr.filter((i) => i % 2 == 1);
}

const newarray = removeEvenNums1(input2);
console.log(newarray);

 console.log("**************************************************************************************");

// // // Q 2. Write a function that takes a string as an argument and returns the number of
// // // vowels in the string. Ignore case sensitivity.
// // // Input: "Hello World"
// // // Output: 3

// Q2  Ans ******************************************************


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

 console.log("**************************************************************************************");

// Q3. Write a for loop that prints the first 10 Fibonacci numbers.
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Q3  Ans ******************************************************

function fibonacci (num){
    var firstTenfib =[0,1]
    let a,b;
    for(var i = 2;i<num;i++){
        a = firstTenfib[i-1]   // 1, 2 , 3 , 4...    a itretions
        b = firstTenfib[i-2]   // 0, 1 , 2 , 3...    b itretions 
                              //  1, 3 , 5 , 8....   a+b=fibonaccisequence
       firstTenfib.push(a+b)
    }
    return firstTenfib
}
const lastten = fibonacci(10)
console.log(lastten)

console.log("**************************************************************************************");


// Q4. Write a function that takes a month as an argument (e.g., "January") and returns
// the number of days in that month. Consider leap years for February. Use a switch
// statement.
// Input: "February"
// Output: 28 or 29 (depending on whether it's a leap year)



// 5. Write a function that takes an array of numbers and returns a new array with only
// the prime numbers from the original array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]




// Q6. Write a function that takes three numbers and returns the largest of the three
// without using the Math.max() method.
// Input: 3, 5, 1
// Output: 5

var numsarr=[3,5,1]

// function findlarge(arr){
//     return Math.max(...arr)
// }

// const large = findlarge(numsarr)
// console.log("large",large)



const findlarge2 = (value) =>{
    var high = 0
    for(var i = 0;i<value.length;i++){
        if(value[i]>high){
            high = value[i]
            // console.log(high)
        }
    }
    return high
}

const large2 = findlarge2(numsarr)
console.log("large",large2)



// Q7. Write a function that takes an array of numbers and returns the product of all the
// numbers in the array.
// Input: [1, 2, 3, 4]
// Output: 24

// Q7  Ans ******************************************************

var numArr = [1, 2, 3, 4]

const findProduct =(arr)=>{
    let product = 1
    for(var nums of arr){
        product = product*nums
        // console.log(product)
    }

return product
}

const finalproduct = findProduct(numArr)

console.log(`Product of all numbers from given arrey is : ${finalproduct} :`)


console.log("**************************************************************************************");


// 8. Write a function that takes a string and an optional character. The function should
// return the number of times the character appears in the string. If the character is
// not provided, count the number of spaces in the string.
// Input: ("Hello World", "o")
// Output: 2
// Input: ("Hello World")
// Output: 1

// Q8  Ans ******************************************************

function countSplChar(str, char) {
    if (char === undefined) {
        char = " ";
    }
    
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

console.log(countSplChar("Hello World", "o")); 
console.log(countSplChar("Hello World"));  

console.log("**************************************************************************************");


// Q9. Write a function that takes a score (0-100) and returns the corresponding grade (A,
//     B, C, D, F) based on standard grading scale. Use a switch statement with a default
//     case for invalid scores.
//     Input: 85
//     Output: B

// Q9  Ans ******************************************************

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

 console.log("**************************************************************************************");

// Q10. Write a function that takes an array of strings and returns an object where the
// keys are the strings and the values are the lengths of those strings. The function
// should exclude strings that have a length of 3 or less.
// Input: ["apple", "bat", "car", "dolphin"]
// Output: {"apple": 5, "dolphin": 7}

// Q10  Ans ******************************************************


var input = ["apple", "bat", "car", "dolphin"];
var object = {};

                                                     // ⭐notes⭐//

// const findString = (input) => {                // ⭐with arrow function
function findString(input) {                      //⭐ with traditional function 
  for (value of input) { 
    if (value.length > 3) {
      object[value] = value.length;
    //   console.log(string);
    }
  }
return object
// return JSON.stringify(object)                  //⭐Note===> Aded json .stringify to gate output in string//

}
 const output2 = findString(input);

 console.log(output2)



 





 
//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function numberCheck(number){
    if(number>0) {
        console.log("The number is a positive number");
    }
    else if(number<0){
        console.log("The number is a negative number");
    }else{
        console.log("The number is 0")
    }
}
//Examples 
numberCheck(10);   //Output - The number is a positive number
numberCheck(-4);  //Output -  The number is a negative number
numberCheck(0);   //Output -  The number is 0



//Assignment 2:
//Write a JavaScript function that takes a positive integer as a parameter
// and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers 
//less than or equal to N

function factorial(number){
    if(number<0){
    throw new Error("Input should be a positive integer");
}
let result = 1;
for(let i=1; i<=number;i++){
    result*= i;
}
return result;
}
//Example
console.log(factorial(9)); //Output - 362880

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one

function findGreaterNumber(number1,number2 ){
    return number1 > number2 ? number1 : number2;
}
console.log(findGreaterNumber(8,10));

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether
 //it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of
  //characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization)

  function isPalindrome(str) {
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome("Race car")) // output - True

  

  //Assignment 5:
  //Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to
  // that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  printPrimesUpToN(10); //Output - 2,3,5,7


  //Assignment 6:
  //Write a JavaScript function that simulates a simple calculator.
  // The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation

  function simpleCalculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Please use +, -, *, or /.");
    }
  }
console.log(simpleCalculator(6, 9, '+'));   // Output: 15 
console.log(simpleCalculator(15, 9, '-'));  // Output: 6 
console.log(simpleCalculator(8, 6, '*'));   // Output: 48
console.log(simpleCalculator(3, 3, '/'));   // Output: 1
//console.log(simpleCalculator(7, 0, '/'));   // Throws an error: Division by zero is not allowed.
//console.log(simpleCalculator(6, 2, '%')); 


//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  console.log(countVowels("Hello, World!"))  // Output - 3

 // Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number.
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself

function isPerfectNumber(number) {
    if (number <= 0) {
      return false;
    }
  
    let sumOfDivisors = 0;
  
    for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    return sumOfDivisors === number;
  }
  console.log(isPerfectNumber(6)); //Output - True

  //Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. 
//The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones

function fibonacciSeries(limit) {
    if (limit <= 0) {
      return [];
    }
  
    if (limit === 1) {
      return [0];
    }
  
    const series = [0, 1];
  
    while (series[series.length - 1] + series[series.length - 2] <= limit) {
      series.push(series[series.length - 1] + series[series.length - 2]);
    }
  
    return series;
  }
  console.log(fibonacciSeries(9)); // Output - [0, 1, 1, 2, 3, 5, 8]

  //Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10

function multiplicationTable(number) {
    if (number <= 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }
  multiplicationTable(6);  // Output - Table of 6



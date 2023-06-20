// 1(a)- Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and 
// returns the day of the week for that date. The function should use the Date object.

// 1(b)-Implement the function to display the day of the week for the current date.

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleDateString('en-US', options);
    return dayOfWeek;
  }
  


const date = "2023-05-19";
const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek); 

// 2(a) -  Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
// 2(b) - Implement the function to display the square root of the sum of squares for an array of numbers.

function calculateRootSum(numbers) {
    const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }


  const numbers = [4, 6, 8, 10];
  const result = calculateRootSum(numbers);
  console.log(result);


// 3(a)- Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
// 3(b) - Implement the function to check if a given positive integer is a prime number.

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false; 
      }
    }
    
    return true; 
  }
  
  const number = 11;
  const isPrimeNumber = isPrime(number);
  console.log(isPrimeNumber);
  
// 


function addNumbers(num1, num2) {
    return num1 + num2;
   }
function subtractNumbers(num1, num2) {
    return num1 - num2;
   }
function multiplyNumbers(num1, num2) {
    return num1 * num2;
   }
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
   }

  console.log(addNumbers(1, 2));
  console.log(subtractNumbers(1, 2));
  console.log(multiplyNumbers(1, 2));
   console.log(divideNumbers(1, 0));
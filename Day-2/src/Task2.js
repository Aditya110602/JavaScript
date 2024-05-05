//Day 2 Task 2

//ways to write es5 function
// Named function
function sum(num1,num2){
    return num1 + num2;
}
sum(4,6);

//immediately invoked function expression(IIFE)
var add = (function() {
    return function(a, b) {
      return a + b;
    };
  })();

//function in array
var functionsArray = [
    function(a, b) { return a + b; },
    function(a, b) { return a * b; }
];

//ways to write es6 function
//arrow function
const addition =  (num1,num2)=> {
    const result = {
        input1:num1,
        input2:num2,
        sum:num1+num2,
    }
    return result;
};
console.log(addition(60,39));

//Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
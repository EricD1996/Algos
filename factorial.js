// const num1 = 0;
// const expected3 = 1;

// const num2 = 6;
// const expected = 720;

// function factorial(num) {
//     if(isNaN(parseInt(num))) return "Not a Number!"
//     if(num < 1) return 1;
//     num = Math.floor(num);
//     console.log(num)
//     return num * factorial(num - 1);
// }
// console.log(factorial(num1))
// console.log(factorial(num2));

const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

function fibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibonacci(two_num1))
console.log(fibonacci(two_num2))
console.log(fibonacci(two_num3))
console.log(fibonacci(two_num4))
console.log(fibonacci(two_num5))
console.log(fibonacci(two_num6))

// function fibonacci(num, memo){
//     memo = memo || {};

//     if(memo[num]) return memo[num];
//     if(num <= 2){
//         if(num === 0) return 0;
//         return 1;
//     }
//     return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
// }
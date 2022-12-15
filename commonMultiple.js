const num1A = 10;
const num1B = 5;
const expected1 = 10;

const num2A = 6;
const num2B = 8;
const expected2 = 24;

const num3A = 15;
const num3B = 25;
const expected3 = 75;

// function lowestCommonMultiple(a,b){
//     let i = 1
//     while(true){
//         if(i% a == 0 && i % b == 0){
//             return i
//         }
//         i++
//     }
// }
// console.log(lowestCommonMultiple(num1A,num1B))
// console.log(lowestCommonMultiple(num2A,num2B))
// console.log(lowestCommonMultiple(num3A,num3B))

function lowestCommonMultiple(a, b, n=1, multiples={}){
    console.log("the multiples are", a*n, b*n)
    if(a*n in multiples){
        return (a*n)
    } else if(b*n in multiples){
        return (b*n)
    } else {
        multiples[a*n] = "true"
        multiples[b*n] = "true"
        n++
        return lowestCommonMultiple(a, b, n, multiples)
    }
}
console.log(lowestCommonMultiple(num1A,num1B))
console.log(lowestCommonMultiple(num2A,num2B))
console.log(lowestCommonMultiple(num3A,num3B))
const cents1 = 25;
const expected1 = {quarter: 1};

const cents2 = 50;
const expected2 = {quarter: 2};

const cents3 = 9;
const expected3 = {nickel: 1, penny: 4};

const cents4 = 99;
const expected4 = {quarter: 3, dime: 2, penny: 4};

// function fewestCoinChange(cents){
//     let outcome = {}
//     let temp
//     if(Math.floor(cents / 25) != 0) {
//         temp = Math.floor(cents / 25)
//         outcome['quarter'] = temp
//         cents = cents - (25 * temp)
//     }
//     if(Math.floor(cents / 10) != 0){
//         temp = Math.floor(cents / 10)
//         outcome['dime'] = temp
//         cents = cents - (10 * temp)
//     }
//     if(Math.floor(cents / 5) != 0){
//         temp = Math.floor(cents / 5)
//         outcome['nickel'] = temp
//         cents = cents - (5 * temp)
//     }
//     if(Math.floor(cents / 1) != 0){
//         temp = Math.floor(cents / 1)
//         outcome['penny'] = temp
//     }
//     return outcome;
// }

function fewestCoinChange(cents){
    let outcome = {}
    if(cents >= 25){
        outcome['quarter'] = Math.floor(cents / 25)
        cents %= 25;
    }
    if(cents >= 10){
        outcome['dime'] = Math.floor(cents / 10)
        cents %= 10;
    }
    if(cents >= 5){
        outcome['nickel'] = Math.floor(cents / 5)
        cents %= 5;
    }
    if(cents >= 1){
        outcome['penny'] = cents;
    }
    return outcome;
}

console.log(fewestCoinChange(cents4))



const numsA = [3, 0, 1];
const expectedA = 2;

const numsB = [3, 0, 1, 2];
const expectedB = null;

const numsC = [2, -4, 0, -3, -2, 1];
const expectedC = -1;

const numsD = [5, 2, 7, 8, 4, 9, 3];
const expectedD = 6;

// function missingValue(unorderedNums){
//     let expected = 0;
//     let sum = 0;
//     let min = unorderedNums[0];
//     let max = unorderedNums[0];
//     for(let num of unorderedNums){
//         sum = sum + num
//         if(min > num) min = num
//         if(max < num) max = num
//     }
//     for(let i = min; i <= max; i++){
//         expected += i;
//     }
//     if(expected == sum){
//         return null
//     }
//     let difference = expected - sum
//     return difference;
// }

function missingValue(unorderedNums){
    var sorted = unorderedNums.sort();
    var min = sorted[0];
    for(var i = 0; i < sorted.length; i++){
        if(sorted[i] != min) return min
        else min++;
    }
    return null;
}

console.log(missingValue(numsD))
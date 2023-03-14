/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // for(let i = 0; i < numbers.length; i++){
    //     for(let j = i + 1; j < numbers.length; j++){
    //         if(numbers[i] + numbers[j] == target){
    //             return [i + 1,j + 1];
    //         }
    //     }
    // }
    let [left, right] = [0, numbers.length - 1];
    while(left < right){
        let sum = numbers[left] + numbers[right];

        let isTarget = sum === target;

        if(isTarget) return [left + 1, right + 1];

        let isTargetGreater = sum < target;
        if(isTargetGreater) left++;

        let isTargetLess = target < sum;
        if(isTargetLess) right--;
    }
    return [-1,-1];
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result = [];
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        result.push(sum);
    }
    return result;
};

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

nums = [1,2,3,4]
console.log(runningSum(nums));
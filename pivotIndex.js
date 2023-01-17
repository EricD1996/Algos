/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    let leftSum = 0;
    for(let num of nums) sum+=num;
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === sum - leftSum - nums[i]) return i;
        leftSum += nums[i]
    }
    return -1;
};

nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums))
nums2 = [1,2,3]
console.log(pivotIndex(nums2))
nums3 = [2,1,-1]
console.log(pivotIndex(nums3))
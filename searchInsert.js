/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(target == nums[i] || target < nums[i]){
            return i;
        } else if(target > nums[nums.length - 1]){
            return (nums.length);
        }
    }
};

console.log(searchInsert([1,3,5,6], 7))
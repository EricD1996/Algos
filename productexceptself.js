/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let pre = 1;
    let post = 1;
    for(let i = 0; i <nums.length; i++){
        result[i] = pre;
        console.log(result, pre)
        pre *=nums[i];
    }
    for(let i = nums.length - 2; i >= 0; i--){
        post *= nums[i + 1];
        result[i] *= post;
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4]))
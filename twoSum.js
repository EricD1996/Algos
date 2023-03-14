/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // var output = [];
    // for(var x = 0; x < nums.length; x++){
    //     for(y = x + 1; y < nums.length; y++){
    //         if(nums[x] + nums[y] === target){
    //             output.push(x);
    //             output.push(y);
    //         }
    //     }
    // }
    // return output;
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let complement = (target - num);
        let sumIndex = map.get(complement);
        console.log(sumIndex, i, complement, map)
        if(map.has(complement)) return [i, sumIndex];
        map.set(num, i);
    }
    return [-1, -1];
};

console.log(twoSum([11,2,7,15], target = 9))
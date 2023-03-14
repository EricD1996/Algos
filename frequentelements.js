/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let tracker = {};
    for(let i = 0; i < nums.length; i++){
        if(tracker[nums[i]]){
            tracker[nums[i]] += 1;
        } else {
            tracker[nums[i]] = 1;
        }
    }
    let result = Object.keys(tracker).map((key) => [Number(key), tracker[key]]);
    result.sort((a,b) => b[1]-a[1])
    let ans = [];
    for(let i = 0; i < k; i++){
        ans.push(result[i][0])
    }
    return ans
};

console.log(topKFrequent([1,1,2,2,2,1,2,2,3,3,3,3], 2))
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let [maxScore, score] = [1, 1];
    nums.sort((a, b) => a - b);

    if(nums.length === 0) return 0
    console.log(nums)
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) continue;
        if(nums[i] === nums[i-1] + 1) score++;
        else score = 1;
        if(maxScore < score) maxScore = score;
        console.log(nums[i],"numsi", score, "score", maxScore, "maxScore")
    }
    return maxScore;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
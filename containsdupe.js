var containsDuplicate = function(nums) {
    let s = new Set();
    for(let i = 0; i < nums.length; i++){
        if(s.has(nums[i])) return true;
        s.add(nums[i]);
    }
    return false;
}


console.log(containsDuplicate([1,2,3,1]))
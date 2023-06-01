function dupe(nums, nums2){
    // for(let i = 0; i < nums.length; i++){
    //     for(j = i + 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] == nums2) return [i, j]
    //     }
    // }
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let complement = (nums2 - num);
        let sumIndex = map.get(complement);
        const isTarget = map.has(complement);
        if(isTarget) return [i, sumIndex];
        map.set(num, i);
    }
}

console.log(dupe([2,7,11,15],26))
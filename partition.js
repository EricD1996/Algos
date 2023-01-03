function partition(nums = [], left = 0, right = nums.length - 1){
    let partitionIdx = Math.floor(nums.length/2);
    nums = swap(nums, partitionIdx, nums.length-1);
    let final = nums.length - 1;
    let leftCounter = 0;
    let rightCounter = nums.length - 2;
    while(leftCounter < rightCounter) {
        while(nums[leftCounter] < nums[final]) leftcounter++
        while(nums[rightCounter] > nums[final]) rightCounter--
        swap(nums, leftCounter, rightCounter)
        leftCounter++
        rightCounter--
    }
    swap(nums, leftCounter, nums.length - 1)
    return nums;
}
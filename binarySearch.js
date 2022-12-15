const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 =[4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

//how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

function binarySearch(nums, target){
    nums = nums.sort();
    console.log(countNums(nums, target))
    let start = 0;
    let end = nums.length - 1;
    while (start <= end){
        if (nums[end] == target || nums[start] == target) return true;
        let mid = Math.floor((start+end) / 2);
        if(nums[mid] == target) return true;
        else if(target > nums[mid]) start = mid + 1
        else if(target < nums[mid]) end = mid - 1
    }
    return false;
}
console.log(binarySearch(nums4, searchNum4))

function countNums(sortedNums, searchNum){
    let count = 0;
    for(i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] == searchNum) count++;
    }
    return count;
}

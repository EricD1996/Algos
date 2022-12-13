const two_nums1 = [1];
const two_expected = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4;

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray(nums){
    var freq = 0;
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]) freq++
        }
        if(freq % 2 == 1) return nums[i];
    }
}

console.log(oddOccurrencesInArray(two_nums2));
console.log(oddOccurrencesInArray(two_nums3));
console.log(oddOccurrencesInArray(two_nums4));
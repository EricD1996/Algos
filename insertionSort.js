var numsRandomOrder = [5, 9, 12, 7, 6, 3, 8, 2, 10, 1, 4, 11];

function insertionSort(nums = []){
    let isSorted = false;
    while(!isSorted){
        for(let i = 1; i < nums.length; i++){
            while(nums[i] < nums[i - 1]){
                let temp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = temp;
                i--
            }
            isSorted = false;
        }
        isSorted = true;
    }
    return nums;
}

console.log(insertionSort(numsRandomOrder));
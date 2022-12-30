var numsRandomOrder = [5, 9, 12, 7, 6, 3, 8, 2, 10, 1, 4, 11];


function bubbleSort(nums = []){
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return nums;
}
console.log(bubbleSort(numsRandomOrder));
console.log(numsRandomOrder.sort((a, b) => a - b));
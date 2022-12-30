var numsRandomOrder = [5, 9, 12, 7, 6, 3, 8, 2, 10, 1, 4, 11];

function selectionSort(nums = []){
    let selectIndex = 0;
    while(selectIndex < nums.length){
        let minVal = nums[selectIndex];
        let minIndex = selectIndex;
        for(let i = selectIndex + 1; i < nums.length; i++){
            if(nums[i] < minVal){
                minVal = nums[i];
                minIndex = i;
            }
        }
        let temp = nums[selectIndex];
        nums[selectIndex] = minVal;
        nums[minIndex] = temp;
        selectIndex++;
    }
    return nums;
}

console.log(selectionSort(numsRandomOrder));
const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2,5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function merge(left = [], right = []){
    const newArray = [];
    const size = left.length + right.length;
    let leftindex = 0;
    let rightindex = 0;
    for(let i = 0; i < size; i++){
        if(left[leftindex] && right[rightindex]){
            if(left[leftindex] > right[rightindex]){
                newArray.push(right[rightindex]);
                rightindex++;
            } else{
                newArray.push(left[leftindex])
                leftindex++;
            }
        }
        else if(left[leftindex]){
            newArray.push(left[index]);
            leftindex++;
        } else {
            newArray.push(right[rightindex]);
            rightindex++;
        }
    }
    return newArray;
}


console.log(merge(sortedA4, sortedB4));
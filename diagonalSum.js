function diagonalDifference(arr) {
    let rightdiagonal = 0;
    let leftdiagonal = 0;
    for(let i = 0; i < arr.length; i++){
        rightdiagonal += arr[i][i];
        leftdiagonal += arr[i][arr.length - 1 - i]
    }
    return Math.abs(rightdiagonal - leftdiagonal)
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))
const arr1 = ["a", "a", "a"];
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const arr3 = [];

function makeFrequencyTable(arr){
    var result = {}
    for(var i = 0; i < arr.length; i++){
        if(result.hasOwnProperty(arr[i])){
            result[arr[i]] += 1
        }
        else {
            result[arr[i]] = 1
        }
    }
    return result;
}

console.log(makeFrequencyTable(arr2));


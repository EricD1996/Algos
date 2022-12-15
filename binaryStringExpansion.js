const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];


function binaryStringExpansion(str, solutions=[], partial=""){
    const index = str.indexOf("?")
    if(index < 0){
        solutions.push(partial + str)
    } else {
        let front = str.slice(0, index)
        let back = str.slice(index + 1)
        let prefix = partial + front
        binaryStringExpansion(back, solutions, prefix + "0")
        binaryStringExpansion(back, solutions, prefix + "1")
    }
    return solutions;
}

console.log(binaryStringExpansion(two_str1))
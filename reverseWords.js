const str1 = "hello world";
const expected1 = "olleh dlrow";

const str2 = "abc def ghi";
const expected2 = "cba fed ihg";

function reverseWords(str){
    var split = str.split(" ");
    var result = [];
    for (var i = 0; i < split.length; i++){
        result[i] = split[i].split('').reverse().join('')
    }
    result = result.join(' ');
    return result;
}
console.log(reverseWords(str2));

const two_str1 = "This is a test";
const two_expected1 = "test a is This";


const two_str2 = "hello";
const two_expected = "hello";

const two_str3 = "     This     is  a    test";
const two_expected3 = "test a is This";

function reverseWordOrder(wordsStr){
    var reverseArr = wordsStr.trim().split(' ').reverse();
    var result = "";
    for (var i = 0; i < reverseArr.length; i++){
        if(reverseArr[i] === "") continue;
        result += reverseArr[i] + " ";
    }
    return result;
}

console.log(reverseWordOrder(two_str3));
var str = "Hello World";
var rotateAmnt1 = 0;
var rotateAmnt2 = 1;
var rotateAmnt3 = 2;
var rotateAmnt4 = 4;
var rotateAmnt5 = 12;


function rotateStr(str, amnt) {
    var end = "";
    var start = "";
    amnt = amnt % str.length;
    for(var i = str.length - amnt; i < str.length; i++)end += str[i]
    for(var j = 0; j < str.length - amnt; j++)start += str[j]
    return str = end + start;
}

console.log(rotateStr(str, rotateAmnt5))

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
//CDABCDAB
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
const two_expected3 = false;

function isRotation(s1, s2){
    if(s1.length != s2.length) return false
    console.log(s2)
    return (s2 + s2).includes(s1)
}

// function isRotation(s1, s2){
//     if (s1.length != s2.length) return false
//     for(var i = 0; i < s1.length; i++){
//         var output = rotateStr(s1, i+1)
//         if(output === s2) return true
//     }
//     return false
// }
console.log(isRotation(two_strA1, two_strB1))
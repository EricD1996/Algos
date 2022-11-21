const str1 = "hello";
const exp1 = "olleh";

const str2 = "";
const exp2 = "";

function reverseString(str){
    var newString = "";
    for(var i = str.length - 1; i >= 0; i--) {
       newString += str[i]; 
    }
    console.log(newString);
}

reverseString(str1);

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "   global      information   tracker";
const two_expected3 = "GIT";

function acronymize(str) {
    var newStr = "";
    var newStr1 = "";
    newStr = str.split(" ");

    for(var i = 0; i < newStr.length; i++) {
        if(newStr[i]){
            newStr1 += (newStr[i][0]);
        }
    }
    return newStr1.toUpperCase();
}

console.log(acronymize(two_str3));

const string1 = "aaaabbcdddaa";
const expected1 = "a4b2c1d3a2";

const string2 = "";
const expected2 = "";

const string3 = "a";
const expected3 = "a1";

const string4 = "bbcc";
const expected4 = "b2c2";

function encodeStr(str) {
    var count = 1;
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count ++;
        } else {
            newStr += str[i];
            newStr += count;
            count = 1;
        }
    }
    return newStr;
}

console.log(encodeStr(string1));


const twostr1 = "a3b2c1d3";
const twoexpected1 = "aaabbcddd";

const twostr2 = "a3b2c12d10";
const twoexpected2 = "aaaabbccccccccccccdddddddddd";

function decodeStr(str){
    let decoded = "";
    let i = 0;
    while(i < str.length){
        let char = str[i++]
        let numStr = ""

        let isNumber = isNaN(parseInt(str[i])) === false

        while (i < str.length && isNumber){
            numStr += str[i++]
            isNumber = isNaN(parseInt(str[i])) === false
        }
        decoded += char.repeat(numStr)
    }
    return decoded;
}

console.log(decodeStr(twostr2));
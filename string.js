const str1 = "hello";
const expected1 = "olleh";

const str2 = "";
const expected2 = "";

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
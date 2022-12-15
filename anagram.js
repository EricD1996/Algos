const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

function isAnagram(s1, s2){
    if(s1.length != s2.length) return false;
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    var s1split = s1.split("");
    var s2split = s2.split("");
    s1split = s1split.sort();
    s2split = s2split.sort();
    s1 = s1split.join("");
    s2 = s2split.join("");
    return s1 === s2;
}

console.log(isAnagram(two_strA3, two_strB3))
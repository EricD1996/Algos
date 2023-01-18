/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let indS = 0;
    for (let indT = 0; indT < t.length; indT++) {
        if(s[indS] === t[indT]) indS += 1;
    }
    return indS === s.length;
};
s = "abc"
t = "ahbgdc"

console.log(isSubsequence(s,t))
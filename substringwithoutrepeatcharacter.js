/**
 * @param {string}
 * @return {number}
 */
function lengthOfLongestSubstring(s){
    let substr = [];
    let length = 0;
    for(let i = 0; i < s.length; i++){
        if(substr.includes(s[i])) substr.splice(0, substr.indexOf(s[i]) + 1)
        substr.push(s[i])
        console.log("substring", substr)
        length = Math.max(substr.length, length)
    }
    return length;
};


let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))
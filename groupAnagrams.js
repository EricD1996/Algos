/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = new Map();
    strs.forEach((word) => {
        let sortedWord = word.split("").sort().join("")
        if(res.has(sortedWord)){
            res.get(sortedWord).push(word)
        } else {
            res.set(sortedWord, [word])
        }
    })
    let ans = []
    res.forEach((value) => {
        ans.push(value)
    })
    return ans
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
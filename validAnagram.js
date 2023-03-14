/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let map = {};
    // for(let i = 0; i < s.length; i++){
    //     if(map[s[i]]){
    //         map[s[i]] += 1;
    //     } else if(!map[s[i]]){
    //         map[s[i]] = 1;
    //     }
    // }
    // for(let i = 0; i < t.length; i++){
    //     if(map[t[i]]){
    //         map[t[i]] -= 1;
    //     } else if(!map[t[i]]){
    //         map[t[i]] = 1;
    //     }
    //     if(map[t[i]] == 0){
    //         delete map[t[i]]
    //     }
    // }
    // if(Object.keys(map).length === 0){
    //     return true
    // }
    // return false
    const isEqual = s.length === t.length;
    if(!isEqual) return false;
    return (reorder(s) === reorder(t))
};


function reorder(str) {
    str = str.split('').sort((a,b) => a - b).join("");
}

console.log(isAnagram("anagram", "nagaram"))
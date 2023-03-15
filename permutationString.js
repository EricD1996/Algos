/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Map = new Map()
    for(const character of s1){
        s1Map.set(character, s1Map.get(character)+1 || 1);
    }
    let left = 0
    let count = s1.length;
    for(let right = 0; right < s2.length; right++){
        let ch = s2[right]
        if(s1Map.has(ch)){
            if(s1Map.get(ch) > 0) {
                count--
            }
            s1Map.set(ch, s1Map.get(ch) - 1)
        }
        if(right-left+1 < s1.length) continue;
        if(count == 0) return true
        console.log(s2[left], s1Map, count)
        if(s1Map.has(s2[left])){
            if(s1Map.get(s2[left]) >= 0) count++
            s1Map.set(s2[left], s1Map.get(s2[left])+1)
        }
        left++
    }
    return false
};

console.log(checkInclusion("ab", "aeidbaooo"))
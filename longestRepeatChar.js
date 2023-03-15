/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let startIdx = 0
    let max = 0
    let seenChars = {}
    let letterMaxCount = 0
    for(let i = 0; i < s.length; i++){
      if(seenChars[s[i]]){
          seenChars[s[i]]++
      }else{
          seenChars[s[i]] = 1
      }
      letterMaxCount = Math.max(letterMaxCount, seenChars[s[i]])
      while((i - startIdx + 1) - letterMaxCount > k){
          seenChars[s[startIdx]]--
          startIdx++
      }
      max = Math.max(max, i - startIdx + 1)
    }  
    return max
  };

  console.log(characterReplacement("AABABBA", 1))
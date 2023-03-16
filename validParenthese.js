/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let output = [];
    // let match = {
    //     ')': '(',
    //     ']': '[',
    //     '}': '{'
    // }
    // for(let i = 0; i < s.length; i++){
    //     let current = s[i];
    //     if(match[current]===undefined){
    //         output.push(current);
    //     }
    //     else{
    //         if(match[current] === output[output.length - 1]) output.pop()
    //         else return false
    //     }
    // }
    // return (!output.length)
    let stack = [];
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    for (const char of s) {
        const isBracket = (char in map)
        if(!isBracket) {
            stack.push(char); 
            continue;
        }
        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) {
            stack.pop();
            continue;
        }
        return false;
    }
    return (stack.length === 0);
};

console.log(isValid("()[]{}"))
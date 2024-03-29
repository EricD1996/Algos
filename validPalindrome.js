/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) return true;
    // const alphaNumeric = filterAlphaNumeric(s);
    // const reversed = reverse(alphaNumeric);
    // return alphaNumeric === reversed;
    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;
    while(left < right){
        leftChar = s[left];
        rightChar = s[right];
        if(!/[a-zA-Z0-9]/.test(leftChar)){
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)){
            right--;
        } else {
            if(leftChar.toLowerCase() != rightChar.toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};

// const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')) => s.toLowerCase().replace(nonAlphaNumeric, '')

// const reverse = (s) => s.split('').reverse().join('');

console.log(isPalindrome("A man, a plan, a canal: Panama"))
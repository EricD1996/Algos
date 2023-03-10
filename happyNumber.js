/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const S = new Set();
    while(true) {
        let s = String(n);
        let x = 0;
        for (let c of s) x += Math.pow(c, 2);
        if( x === 1) break;
        n = x;
        if (S.has(n)) return false;
        S.add(n);
    }
    return true;
};

let n = 19;
console.log(isHappy(n))
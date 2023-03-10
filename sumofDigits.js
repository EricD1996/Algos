/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let ans = 0;
    while(n > 0){
        ans += n%k;
        n = Math.floor(n/k);
    }
    return ans;
};


console.log(sumBase(34, 6))
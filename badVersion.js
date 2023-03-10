var solution = function(isBadVersion) {
    return function(n) {
        let lo = 0
        let hi = n-1
        while(lo<=hi){
            let mid = lo + Math.floor((hi-lo)/2)
            if(isBadVersion(mid)) hi = mid-1; else lo=mid+1
        }
        return lo
    };
}

let result = solution(5);
console.log(result)
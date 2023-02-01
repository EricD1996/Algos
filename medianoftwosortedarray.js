function twoarray(nums1, nums2){
    for(let i = 0; i< nums2.length; i++){
        nums1.push(nums2[i]);
    }
    nums1.sort(function(a,b){return a - b});
    console.log(nums1)
    let medianInd = Math.floor(nums1.length/2);
    if(nums1.length % 2 === 0){
        return (nums1[medianInd] + nums1[medianInd-1])/2
    }
    return nums1[medianInd];
}
let nums1 = [-2, -1];
let nums2 = [3];

console.log(twoarray(nums1, nums2))
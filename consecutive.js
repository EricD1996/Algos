var longestConsecutive = function(nums) {
    
    const set = new Set(nums); 

    const seqList = []; 

    set.forEach((v) =>
    {
        if (!set.has(v - 1))
        {
            seqList.push(v); 
        }
    });
    let longest = seqList.length > 0 ? 1 : 0; 
    for (let i = 0; i < seqList.length; i++)
    {
        let currLongest = longest;
        let j = 1;
        while (set.has(seqList[i] + j))
        {
            j++;
            currLongest++;
        }
        longest = currLongest > longest ? currLongest : longest; 
        currLongest = 1; 
    }

    return longest; 
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
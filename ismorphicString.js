const isIsomorphic=(s,t)=>{
    let sArr=[]
    let sIndex=[]
    let tArr=[]
    let tIndex=[]
    for(let x of s){
        if(!sArr.includes(x))sArr.push(x)
        sIndex.push(sArr.indexOf(x))
    }
    for(let x of t){
        if(!tArr.includes(x))tArr.push(x)
        tIndex.push(tArr.indexOf(x))
    }
    const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b)
    return equal(sIndex,tIndex)
}

s = "egg"
t = "add"

console.log(isIsomorphic(s,t));
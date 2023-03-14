var checkZeroOnes = function(s) {
    let longOne = 0;
    let longZero = 0;
    let tempOne;
    let tempZero;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "1" && s[i - 1] == "1"){
            tempOne += 1;
            if(longOne < tempOne) longOne = tempOne;
            continue; 
        } else if(s[i] == "0" && s[i - 1] == "0"){
            tempZero += 1;
            if(longZero < tempZero) longZero = tempZero;
            continue;
        }
        if(s[i] == "1") {
            tempOne = 1;
            tempZero = 0;
            if(longOne < tempOne) longOne = tempOne;
            continue;
        } else if(s[i] == "0"){
            tempZero = 1;
            tempOne = 0;
            if(longZero < tempZero) longZero = tempZero;
            continue;
        }
    }
    return(longOne > longZero)
};
console.log(checkZeroOnes("101111110000000000"))
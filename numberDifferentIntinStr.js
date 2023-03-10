/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let s = new Set();
    // let split = word.split('');
    let strNum = "";
    for(let i = 0; i < word.length; i++){
        if(isNaN(word[i])){
            strNum += " ";
            continue;
        }
        strNum += word[i];
    }
    let splitNum = strNum.split(" ");
    for(let i = 0; i < splitNum.length; i++){
        if(splitNum[i] == ""){
            continue;
        }
        let index = 0;
        while(splitNum[i][index] == 0){
            splitNum[i] = (parseInt(splitNum[i], 10)).toString();
            ++index;
        }
        s.add(splitNum[i])
    }
    console.log(s)
    console.log(s.size);
};



numDifferentIntegers("a1b01c001");
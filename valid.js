const str1 = "a(b))(c";
const expected1 = false;
const str2 = "(((aedead)()(";
const expected2 = false;
const str3 = "()()()()";
const expected3 = true;

function parensValid(str){
    var par = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] == "(") par += 1
        else if (str[i] == ")"){
            par -= 1
            if(par < 0) return false;
        }
    }
    return par === 0
//     if(par != 0 ) return false
//     return true;
}
console.log(parensValid(str3))


function bracesValid(str){
    var tracker = []
    const open = ["{", "(", "["]
    const close = ["}", ")", "]"]
    for( i = 0; i < str.length; i++){
        if(tracker.length == 0 && close.includes(str[i])) return false
        if(open.includes(str[i])) tracker.push(str[i])
        else if(close.includes(str[i])){
            var curr = close.indexOf(str[i])
            if(tracker[tracker.length-1] == open[curr]){
                tracker.pop()
            } else return false
        } else continue;
    }
    return tracker.length === 0;
}

console.log(bracesValid(str3));
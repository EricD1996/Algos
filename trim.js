const str1 = "     hello world     ";
const expected1 = "hello world";

const str2 = "                afoafonasf    ";
const expected2 = "afoafonasf";

function trim(str){
    var newStr = "";
    var end = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] === " ") var beginning = i;
        else if(str[i] != " ") break;
    }
    for(i = str.length - 1; i > 0; i--){
        if(str[i] === " ") var end = i;
        else if(str[i] != " ") break; 
    }
    newStr = str.slice(beginning + 1, end + 1);
    return newStr;
}

// function trim(str){
//     const list = str;
//     for (i = 0; i < list.length; i++){
//         if (list[i] != " "){
//             var first = i;
//             break;
//         }
//     }
//     for(j = list.length - 1; j > 0; j--){
//         if (list[j] != " "){
//             var last = j;
//             break;
//         }
//     }
//     const newString = str.slice(first, last+1);
//     return newString;
// }

console.log(trim(str2));
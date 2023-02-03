function reverse(x){
    let neg = false;
    if(x < 0){
        neg = true;
        x = x * -1;
    }
    let num = parseInt(x.toString().split('').reverse().join(''));
    // let string = x.toString();
    // let split = string.split('');
    // let reverse = split.reverse();
    // let joined = reverse.join('');
    // let num = parseInt(joined);
    if(neg) {
        return (num * -1);
    }
    return num;
}

let x = -123000;

console.log(reverse(x));
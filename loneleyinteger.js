function lonelyinteger(a) {
    let object = {};
    for(let i = 0; i < a.length; i++){
        if(a[i] in object){
            object[a[i]] += 1;
        }else {
            object[a[i]] = 1;
        }
    }
    return Object.keys(object).find(number => object[number] === 1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
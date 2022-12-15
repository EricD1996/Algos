const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [];
const expected3 = true;

function socialDistancingEnforcer(queue){
    var temp = 0;
    var start = false;
    for(i = 0; i < queue.length; i++){
        if(queue[i] == 1 || start == true){
            if(queue[i] == 0) {
                temp += 1
            }
            else if (queue[i] == 1 && start == true){
                if(temp < 6) return false
                else if (temp >= 6) temp = 0;
            }
            start = true;
        }
    }
    return true;
}
console.log(socialDistancingEnforcer(queue3));
const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    yo: true,
    abc: 42,
    3: "wassup",
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ["abc", 3, "yo"];
const vals3 = [42, "wassup", true, "something"];

const keys4 = ["abc", 3, "yo", "something"];
const vals4 = [42, "wassup", true];
const expected4 = {
    yo: true,
    abc: 42,
    3: "wassup",
    someting: "",
};

//create function
//create object variable to accept outputs
//create 2 loops
//first loop pushes the values into the object as keys
//second loop pushes the values into the object as values

function zipArraysIntoMap(keys, values){
    var result = {};
    if(keys.length < values.length){
        return false;
    }
    else{
        for(var i = 0; i < keys.length; i++){
            if(values[i] == undefined){
                result [keys[i]] = ""
                continue
            }
            result [keys[i]] = values[i]
        }
        console.log(result)
    }
}
console.log(zipArraysIntoMap(keys1,vals1));
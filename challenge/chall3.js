function arrayToObj(arr){
    let obj = {};
    arr.forEach((elem) => {
        obj[elem[0].toString()] = elem[1];
    });
    return obj;
}

console.log(
    arrayToObj([
        ['prop1', 'value1'], 
        ['prop2', 'value2'], 
        ['prop3', 'value3']
    ])
);
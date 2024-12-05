function pairs(testObject){
    // creates an empty array
    const result = [];
    //Iterates over the key of testObject
    for(let key in testObject){
        result.push([`${key}, ${testObject[key]}`])
    }
    return result;
}

module.exports = pairs;
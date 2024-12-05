function invert(testObject){

    // creates an empty objects
    const result = {};

    // Iterates over the key of testObject
    for(let key in testObject){
        result[testObject[key]]=key;
    }
    return result;
}
module.exports = invert;
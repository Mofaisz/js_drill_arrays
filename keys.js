function getKeys(testObject) {
  //creats an empty array to store key
  let keyName = [];
  // Iterates over the key of object
  for (let key in testObject) {
    // Appends the key into an array name as keyName
    keyName.push(key);
  }
  // returns the array
  return keyName;
}

//Exporting fucntion for further use
module.exports = getKeys;

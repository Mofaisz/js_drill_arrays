function getValues(testObject) {
  //creates an empty array to store value
  const result = [];

  //iterates over the key of testObject
  for (let key in testObject) {
    // appends the value of testObject
    result.push(testObject[key]);
  }

  return result;
}

module.exports = getValues;

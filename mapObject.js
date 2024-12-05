function mapObject(obj, cb) {
  //  creates an empty objects
  const result = {};
  // Iterates over the key of obj
  for (let key in obj) {
    // Assigning key in result and values through callBack function
    result[key] = cb(obj[key]);
  }

  return result;
}

// Exporting for further use
module.exports = mapObject;

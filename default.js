function defaults(obj, defaultProps) {
  // iterates over the keys of default props
  for (let key in defaultProps) {
    /*
    checks if obj has same key or not if not it define as undefined 
    so a new key and a value will assign to it 
    */
    if (obj[key] == undefined) {
      obj[key] = defaultProps[key];
    }
  }

  //returns the updated object
  return obj;
}

module.exports = defaults;

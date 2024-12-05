const mapObject = require("../mapObject.js");
const testObject = { start: 5, end: 12 }; // use this object to test your functions

console.log(
  mapObject(testObject, (val) => {
    return val + 5;
  })
);

const defaults = require("../default.js");
var iceCream = {flavor: "chocolate"};
var updated_icecream = {flavor: "vanilla", sprinkles: "lots"};
console.log(defaults(iceCream,updated_icecream));
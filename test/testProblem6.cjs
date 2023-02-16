const inventory = require('../cars.cjs');
const problem6 = require('../problem6.cjs');

const result = problem6(inventory,["Toyota"]);
console.log(JSON.stringify(result));
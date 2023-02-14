const inventory = require('../cars.cjs');
const problem6 = require('../problem6.cjs');

const result = (JSON.stringify(problem6(inventory)));
console.log(result);
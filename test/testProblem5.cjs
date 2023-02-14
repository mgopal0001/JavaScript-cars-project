const inventory = require('../cars.cjs');
const problem4 = require('../problem4.cjs');
const problem5 = require('../problem5.cjs');

const allCarYears = problem4(inventory);
const result = problem5(allCarYears);

for(let rowIndex = 0; rowIndex < result.length; rowIndex++){
    console.log(result[rowIndex]);
}


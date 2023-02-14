const inventory = require('../cars.cjs');
const problem4 = require('../problem4.cjs');

const result = problem4(inventory);

for(let rowIndex=0; rowIndex<result.length;rowIndex++){
    console.log(result[rowIndex]);
}

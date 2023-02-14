const inventory = require('../cars.cjs');
const problem3 = require('../problem3.cjs');

const result = problem3(inventory);

for(let rowIndex = 0;rowIndex<result.length;rowIndex++){
    console.log(result[rowIndex]);
}
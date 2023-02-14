function problem3(carsInventory){
    let carModel = [];
    for(let rowIndex = 0; rowIndex<carsInventory.length; rowIndex++){
        carModel[rowIndex] = carsInventory[rowIndex].car_model;
    }
    return carModel.sort();
}
module.exports = problem3;
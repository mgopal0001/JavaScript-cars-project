function problem2(carsInventory){
    let lastCarData = carsInventory[carsInventory.length -1];
    let lastCar = 'Last car is a '+ lastCarData.car_make +' '+ lastCarData.car_model;
    return lastCar;
}
module.exports = problem2;
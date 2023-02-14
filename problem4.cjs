function problem4(carsInventory){
    let carYear = [];
    for(let rowIndex=0;rowIndex<carsInventory.length;rowIndex++){
        carYear[rowIndex] = carsInventory[rowIndex].car_year;
    }
    return carYear;
}
module.exports = problem4;

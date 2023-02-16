function problem4(carsInventory){

    if(problem4.arguments.length < 1){
        return [];
    }
    if(carsInventory.length == 0){
        return [];
    }
    if(!Array.isArray(carsInventory)){
        return [];
    }

    let carYear = [];
    
    for(let rowIndex = 0; rowIndex < carsInventory.length; rowIndex++){
        carYear[rowIndex] = carsInventory[rowIndex].car_year;
    }

    return carYear;
}
module.exports = problem4;

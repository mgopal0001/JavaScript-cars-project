function problem3(carsInventory){

    if(problem3.arguments.length < 1){
        return [];
    }
    if(carsInventory.length == 0){
        return [];
    }
    if(!Array.isArray(carsInventory)){
        return [];
    }

    let carModel = [];
    for(let rowIndex = 0; rowIndex<carsInventory.length; rowIndex++){
        carModel[rowIndex] = carsInventory[rowIndex].car_model;
    }
    
    return carModel.sort();
}
module.exports = problem3;
function problem2(carsInventory){

    if(problem2.arguments.length < 1){
        return [];
    }
    if(carsInventory.length == 0){
        return [];
    }
    if(!Array.isArray(carsInventory)){
        return [];
    }

    const  lastCar = carsInventory[carsInventory.length -1];
    return lastCar
}
module.exports = problem2;
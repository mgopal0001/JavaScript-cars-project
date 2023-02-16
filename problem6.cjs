function problem6(carsInventory, searchCars = []){

    if(problem6.arguments.length < 1){
        return [];
    }
    if(carsInventory.length == 0){
        return [];
    }
    if(typeof searchCars == 'undefined'){
        return [];
    }
    if(!Array.isArray(searchCars)){
        return [];
    }

    let detailOfCars = [];
    let carIndex = 0;

    for(let rowIndex = 0; rowIndex < searchCars.length; rowIndex++){

        for(let columnIndex = 0; columnIndex < carsInventory.length; columnIndex++){
            
            if(carsInventory[columnIndex].car_make == searchCars[rowIndex]){

                detailOfCars.push(carsInventory[columnIndex]);
            }
        }
    }
    return detailOfCars;
}
module.exports = problem6;
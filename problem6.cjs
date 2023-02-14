function problem6(carsInventory){

    let detailsOfBmwAndAudi = [];
    let bmwAudiIndex = 0;

    for(let rowIndex = 0; rowIndex < carsInventory.length; rowIndex++){
        
        if(carsInventory[rowIndex].car_make == 'BMW' || carsInventory[rowIndex].car_make == 'Audi'){
            detailsOfBmwAndAudi[bmwAudiIndex] = carsInventory[rowIndex];
            bmwAudiIndex++;
        }
    }
    
    return detailsOfBmwAndAudi;
}
module.exports = problem6;
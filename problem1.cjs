
function problem1(carsInventory){

    let carYear;
    let carMake;
    let carModel;

    for (let rowIndex=0; rowIndex<carsInventory.length;rowIndex++){
        if(carsInventory[rowIndex].id == 33){
            carYear = carsInventory[rowIndex].car_year;
            carMake = carsInventory[rowIndex].car_make;
            carModel = carsInventory[rowIndex].car_model;
        }
    }
    let carDetails = 'Car 33 is a '+carYear +' '+ carMake +' '+carModel;
    return carDetails;
}
module.exports = problem1;


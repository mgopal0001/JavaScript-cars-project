
function problem1(carsInventory, searchId){
    
    if(problem1.arguments.length < 1){
        return [];
    }
    if(carsInventory.length == 0){
        return [];
    }
    if(typeof searchId == 'undefined'){
        return [];
    }
    if(typeof(searchId) != 'number'){
        return [];
    }
    if(!Array.isArray(carsInventory)){
        return [];
    }
   
    for(let rowIndex = 0; rowIndex < carsInventory.length; rowIndex++){
        if(carsInventory[rowIndex].id == searchId){
            return carsInventory[rowIndex];
        }
    }   
}

module.exports = problem1;


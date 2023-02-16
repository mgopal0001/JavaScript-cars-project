function problem5(allCarYears , olderYear){

    if(problem5.arguments.length < 1){
        return [];
    }
    if(allCarYears.length == 0){
        return [];
    }
    if(!Array.isArray(allCarYears)){
        return [];
    }
    if(typeof olderYear == 'undefined'){
        return [];
    }
    if(typeof(olderYear) != 'number'){
        return [];
    }

    allCarYears.sort();

    let carYearsAfterCondition = [];

    for(let rowIndex = 0; rowIndex < allCarYears.length; rowIndex++){

        if(allCarYears[rowIndex] >= olderYear){
            break;
        }

        carYearsAfterCondition[rowIndex] = allCarYears[rowIndex];
    }
    console.log('Total Cars older than '+olderYear+': ' + carYearsAfterCondition.length);
    return carYearsAfterCondition;
}
module.exports = problem5;
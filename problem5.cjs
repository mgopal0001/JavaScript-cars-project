function problem5(allCarYears , olderYear){

    if(problem5.arguments.length < 1){
        return [1];
    }
    if(allCarYears.length == 0){
        return [2];
    }
    if(!Array.isArray(allCarYears)){
        return [3];
    }
    if(typeof olderYear == 'undefined'){
        return [4];
    }
    if(typeof(olderYear) != 'number'){
        return [5];
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
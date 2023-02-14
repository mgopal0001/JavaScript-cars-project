function problem5(allCarYears){
    allCarYears.sort();
    let carYearsAfterCondition = [];

    for(let rowIndex = 0; rowIndex < allCarYears.length; rowIndex++){

        if(allCarYears[rowIndex] >= 2000){
            break;
        }

        carYearsAfterCondition[rowIndex] = allCarYears[rowIndex];
    }
    console.log('Total Cars older than 2000: ' + carYearsAfterCondition.length);
    return carYearsAfterCondition;
}
module.exports = problem5;
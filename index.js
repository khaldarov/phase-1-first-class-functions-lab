// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => {
    const answer = (function (arr = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
        return arr.slice(0, 2);
    })
    return answer();
}
console.log(returnFirstTwoDrivers())
//
const returnLastTwoDrivers = () => {
    const answer = (function (arr = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
        return arr.slice(-2);
    })
    return answer()
}
console.log(returnLastTwoDrivers())
//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0](drivers))
//
function createFareMultiplier(a) {
    return function(fare) {
        return a * fare
    }
}
//
const fareDoubler = createFareMultiplier(2);
//
const fareTripler = createFareMultiplier(3);
//
/* function createFareMultiplier(a) {
    let fare = 5;
    const innerFunc = () => (fare * a)
    return innerFunc
}
console.log(createFareMultiplier(5)())
//
const fareDoubler = (a) => {
   return (createFareMultiplier(a)() * 2 / 5);
}
console.log(fareDoubler(10))
//
const fareTripler = (a) => {
    return (createFareMultiplier(a)() * 3 / 5);
}
console.log(fareTripler(12)) */


function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers()))
// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers()))

// console.log(returnLastTwoDrivers == [ 'Amari', 'Mo' ])

// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers = []) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers = []) {
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(fare) {
        return fare * fare;
    }
}

// const result = function createFareMultiplier(fare) {
//     function fareDoubler(fare){
//         return fare*2;
//     }
//     return fareDoubler;
// }

function fareDoubler(fare) {
    return fare*2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers(drivers = [], selectingDrivers) {
    return selectingDrivers(drivers);
}
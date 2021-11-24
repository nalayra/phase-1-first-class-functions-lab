const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
let returnFirstTwoDrivers = function () {
    let firstTwo = drivers.slice(0, 2)
    return firstTwo;
}

let returnLastTwoDrivers = function () {
    let lastTwo = drivers.slice(2, 4)
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function multiplier(fare) {
        return fare * integer;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}


function selectDifferentDrivers(drivers, passDrivers) {
    if (passDrivers == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else {
        return returnLastTwoDrivers(drivers);
    }
}
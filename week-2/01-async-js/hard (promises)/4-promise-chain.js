/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
    return new Promise(resolve =>{
        setTimeout(() => resolve(`wait1 resolved after ${t1} seconds`),t1*1000)
    })
}

function wait2(t2) {
    return new Promise(resolve =>{
        setTimeout(() => resolve(`wait2 resolved after ${t2} seconds`),t2*1000)
    })
}

function wait3(t3) {
    return new Promise(resolve =>{
        setTimeout(() => resolve(`wait3 resolved after ${t3} seconds`),t3*1000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now()
    return wait1(t1)
        .then(()=> wait2(t2))
        .then(()=> wait3(t3))
        .then(()=>  Date.now() -startTime)
}

module.exports = calculateTime;

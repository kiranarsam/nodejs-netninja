var counter = function(arr) {
    return "There are " + arr.length + " elements in the arr.";
}

var adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;  // The is template string
};

var pi = 3.142;


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;


/*
//We can also export function as below

module.exports = {
    counter: counter,
    adder:adder,
    pi:pi
};

*/

/* or  */

/*
//We can also export function as below 

module.exports.counter = function(arr) {
    return "There are " + arr.length + " elements in the arr.";
}

module.exports.adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;  // The is template string
};

module.exports.pi = 3.142;

*/

'use strict';

// Functional JS Patterns


// FrontEnd Masters - Hardcore functional Programing - Lonsdorf/Nelson

// 1. Find greater in array

// Regular Recursive

// var greater = function(a,b) {
//     return a > b ? a : b;
// };
//
// var max = function (arr) {
//     if (arr.length === 2) {
//         return greater(arr[0], arr[1]);
//     }
//     if (greater(arr[0], arr[1]) === arr[0]) {
//         arr.splice(1, 1);
//     } else if (greater(arr[0], arr[1]) === arr[1]) {
//         arr.shift();
//     }
//     return max(arr);
// };
//
// console.log(max([1,-3483,9,7,2]));

// Ramda Style

var greater = function(a,b) {
    return a > b ? a : b;
};

var max = _.reduce(greater, -2);

max([1,-3483,9,7,2]);


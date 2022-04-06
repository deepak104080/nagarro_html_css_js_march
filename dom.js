// javascript engine - browser, nodejs - v8
// DOM - Doocument Object Model
// var, let, const

var a = 5;
var b = 6;

function sum (num1, num2) {
    return num1+num2;
}

var sum_temp = sum(a,b);

console.log('Sum = ', sum_temp);

// String
// Number
// Boolean
// Object
// Array - Object

var num = 5;
var str = 'Deepak Kumar'
var status = true;
var obj = {
    name: 'Deepak Kumar',
    add: 'GGN'
}

console.log(window.document);


function fn_submit() {
    console.log('button clicked....');
    var temp_name = document.getElementById('first_name').value;
    console.log(temp_name);
}


// how to create element in js
// append element
// store and retriev values from localStorage

// how to pick values from radio and checkboxes
// create img Element
// set attribute src - value from input
// set Attribute for width and height / img class as attribute

// function on button click () {
//     create on parent elem
//     elem1 - create one elem - store name
//     elem2 - create one elem - dob
//     elem3 - create one elem - store skills
//     elem4 - create one elem - store image

//     parent.append - elem1, elem2, elem3, elem4

//     table.append - parent
// }
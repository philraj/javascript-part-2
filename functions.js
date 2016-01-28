//Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.
function compare (a,b) {
    if (a.length < b.length) {
        return -1;
    }
    else if (a.length === b.length) {
        return 0;
    }
    else {
        return 1;
    }
}

var strings = ["kiwi", "apple", "watermelon", "banana", "orange", "pear", "parsimon"];
console.log ("Unsorted strings: " + strings);

strings.sort (compare);
console.log("Sorted strings: " + strings);
console.log();



//Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.
var objects = [
    {name: "Homer", email: "homer@simpsons.com"},
    {name: "Lisa", email: "lisa@simpsons.com"},
    {name: "Jebediah Sprinfield", email: "jeb@springfield.com"},
    {name: "Mr. Burns", email: "burns@nuclearpower.net"},
    {name: "Dr. Hibert", email: "info@hospital.com"}
];

function compareNameLength (o1, o2) {
    if (o1.name.length < o2.name.length) {
        return -1;
    }
    else if (o1.name.length === o2.name.length) {
        return 0;
    }
    else {
        return 1;
    }
}

function compareEmail (o1, o2) {
    if (o1.email < o2.email) {
        return -1;
    }
    else if (o1.email === o2.email) {
        return 0;
    }
    else {
        return 1;
    }    
}

console.log("UNSORTED OBJECTS... \n" + JSON.stringify(objects));
console.log();

objects.sort(compareNameLength);
console.log("OBJECTS sorted by NAME LENGTH... \n" + JSON.stringify(objects));
console.log()
objects.sort(compareEmail);
console.log("OBJECTS sorted by EMAIL... \n" + JSON.stringify(objects));
console.log()



//Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.
function square (a) {
    return a * a;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Untouched numbers... " + numbers);

numbers = numbers.map(square);
console.log("Squared numbers... " + numbers);
console.log()



//Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
var objects = [ {num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5} ];

function objectSquare (o) {
    o.num *= o.num
    return o;
}

console.log("Objects before squaring... \n" + JSON.stringify(objects));
objects = objects.map(objectSquare);
console.log("Objects AFTER squaring... \n" + JSON.stringify(objects));

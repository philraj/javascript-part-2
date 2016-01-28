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
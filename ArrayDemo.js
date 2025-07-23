// An Array is an special data typevof an object used to stored an collections of values.
// It can store any datatypes
// It can accessed by Numeric Indices from 0.... Like 0,1,2,3..

//              0      1       2        3       4
let colors = ["red","black","Green","Yellow","orange"]

console.log(colors);          //Prints the Array

console.log(colors[2]);       // Second Position color

console.log(typeof(colors));   //type = object

colors.push("purple");   // add to the last of array 

colors.pop();            // removes last element

colors[2]="pink";         // updating second Position element to pink  

colors.shift();           //Removes first element of an array

colors.unshift("Red");    // Add element to the first position of an array

console.log(colors.slice(0,3));       //returns specifik part of an array..

colors.splice(1,3);        // It deletes 3 Values from index 1 

console.log("Length of an array : "+colors.length);     // returns Length

console.log(colors);    // Printiing Colors array



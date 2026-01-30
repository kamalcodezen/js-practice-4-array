
let marks = [78, 90, 78, 56, 92, 70, 71, 63, 79, 96, 92]; //array create

let city = ["kolkata", "mumbai", "delhi", "pune", "up"];

let age = 68;

console.log(marks);

marks.push(999, 888); // push new value add
console.log(marks);

marks.pop();   //pop last value cutout 
console.log(marks);

marks.unshift(777, 333); // unshift method fast index|position value add
console.log(marks);

marks.shift(); // shift method fast position |index value cutout
console.log(marks);


let marksSlice = marks.slice(4, 6); //slice method 
console.log(marksSlice);

console.log(marks);


let marksSplice = marks.splice(4, 2, 988, 899); //splice method (start,delete,add)
console.log(marksSplice);

console.log(marks);


let arrayAdd = marks.concat(city); // more array concat add++
console.log(arrayAdd);


console.log(city[3]); // array value access 1way indices(index);


let checkIncludes = city.includes("mumbai"); //  include method array value check
console.log(checkIncludes);

if (city.includes("delhi")) {   // include method check another way
    console.log("This delhi city is available");
} else {
    console.log("This  delhi city is not available");
}



let checkIndex = city.indexOf("mumbai"); // indexOf method check array value index access
console.log(checkIndex);

if (city.indexOf("pune")) {  // indexOf method check array value index access another way
    console.log("This position is true");
} else {
    console.log("This position is not true");
}


let checkArray = Array.isArray(age); // Array.isArray method check 
console.log(checkArray);

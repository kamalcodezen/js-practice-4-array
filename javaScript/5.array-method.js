/***********************************
         --> Array Method <--
 ************************************/

// 1.array.push(); ==>at the end

let cities = ["mumbai", "kolkata", "delhi", "hyderabad"];
cities.push("pune", "UP", "lucknow");
console.log(cities);


// 2.pop method (delete at the end);
let deletedItem = cities.pop();
console.log("deletedItem = ", deletedItem);


// 3. array.toString() method

let marks = [45, 78, 98, 35, 67];

console.log(marks.toString()); //convert string
console.log(marks);

marks = marks.toString(); // convert string
console.log(marks);



// 4. concat method array + array

let cartoon = ["thor", "spider", "krish"];

let nikeHeros = ["bheem", "nobita", "oggy"];

let footballTeam = ["madrid", "barca", "psg"];

console.log(cartoon.concat(nikeHeros));

let newHeros = nikeHeros.concat(footballTeam, cartoon);
console.log(newHeros);




// 5.| 6. unshift method and shift method

let car = ["bmw", "mercedes", "tata"];
console.log(car);

car.unshift("skoda", "nisan"); // add korlo ptothome push
console.log("add =", car);


let val = car.shift(); // kete dilo prothome pop
console.log("deleted =", val);





// 7. array.slice(); method 

let bike = ["honda", "hunk", "M80", "bullet"];

console.log(bike.slice(1, 3));


// 8. array.splice(star,delete,new); method;

let item = [5, 7, 8, 3, 6, 9, 1];

let add = item.splice(2, 2, 101);
console.log(item); // new array return kore ;
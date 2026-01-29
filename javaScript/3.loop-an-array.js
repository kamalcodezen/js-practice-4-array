
// print of all array
let cities = ["delhi", "chennai", "mumbai", "kerala", "kolkata", "pune"];

console.log(cities);

// for loop and print
for (let i = 0; i < cities.length; i++) {
    console.log(i, cities[i]);
}


// for of loop print full array (generally use for of loop )

for (let city of cities) {
    console.log(city);
    console.log(city.toUpperCase());
}
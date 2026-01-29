/*=================================
Qs1.for a given array with marks of student -> [85,97,44,37,76,60];
Find the average marks of the entire class.
=================================== */

// for loop
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let average = sum / marks.length;
console.log(`Total average marks of the entire class = ${average}`);




// for of loop 
let marksStudent = [85, 97, 44, 37, 76, 60];
let total = 0;

for (let val of marksStudent) {
    total += val;
}

let ave = total / marksStudent.length;
console.log(`Total entire class average marks = ${ave}`);



// ===========================================================================


/*==================================
Qs2.For a given array with prices of 5 item -> [250,645,300,900,50];
All item have an offer of 10% OFF on them.Change the array to store final price after applying offer.
==================================== */

// for of loop
let item = [250, 645, 300, 900, 50];
let i = 0;
for (let val of item) {
    // console.log(`value at index ${i} = ${val}`); //indirect access index
    let offer = val / 10;
    item[i] = item[i] - offer;
    // console.log(`final price after offer = ${item[i]}`);
    i++;
}
console.log(`Final price after applying offer new array =`, item);



// for loop 
let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
    // console.log(i);
    let offer = price[i] * 10 / 100;
    price[i] -= offer;
    // console.log(price[i])
}
console.log(`Final price after applying offer new array =`, price);


// =====================================================================

/*===================================
Qs3. create an array to store companies --> "Bloomberg", "Microsoft","Uber","Google","IBM","Netflix".

a.Remove the first company from the array.

b.Remove Uber & Add Ola its Place.

c.Add Amazon at the end.
====================================*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
// console.log(companies);

companies.splice(2, 1, "Ola");
// console.log(companies);

companies.push("Amazon");
// console.log(companies);

console.log(companies);


// =============================



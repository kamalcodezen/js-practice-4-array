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
console.log(`Total entire class average marks = ${ave}`)
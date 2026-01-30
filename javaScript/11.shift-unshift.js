
let companies = ["accenture", "tcs", "wipro", "exl", "genpact"];

console.log(companies);

let cutFirst = companies.shift(); 

console.log(companies);
console.log(cutFirst);


companies.unshift("mercedes");
console.log(companies);
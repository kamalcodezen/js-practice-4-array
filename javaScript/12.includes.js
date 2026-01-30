
//  array.includes() -> method  check true false . 

let companies = ["accenture", "tcs", "wipro", "exl", "genpact"];

console.log(companies);

console.log(companies.includes("bmw"));

let check = companies.includes("accenture");
console.log(check);


if (companies.includes("genpact")) {
    console.log("win");
} else {
    console.log("looser");
}
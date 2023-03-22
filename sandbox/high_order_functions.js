//multi-dimension array
const companies = [
    {name:"Yash", category:"IT", start:"1989", end:"2000"},
    {name:"Manjil", category:"IT", start:"2021", end:"2023"},
    {name:"Aura", category:"Dynamics", start:"2000", end:"2023"},
    {name:"Mo", category:"IT", start:"2002", end:"2023"},
    {name:"Myriam", category:"IT", start:"1999", end:"1986"},
    {name:"Praneel", category:"Finance", start:"2021", end:"2023"}
    
]

const ages = [33,22,11,42,4245,1541,23523];


//  const totalyears = companies.reduce((total, company) => total + (company.end- company.start), 0);
// console.log(totalyears)



//forLoops
// for(i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }


//for loop
// let canDrink = [];
// for (i=0; i< ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//filter
// const result = ages.filter(age => {
//     if(age >=21){
//         return true;
//     }
// })
// console.log(result);

//further simplifying .filter()
// const result1 = ages.filter(age => age >=21);
// console.log(result1);

//forLoops
// for(i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }

//foreach
// companies.forEach((company, index) =>  {
//     console.log(company);
// })


//for loop
// let canDrink = [];
// for (i=0; i< ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//filter
// const result = ages.filter(age => {
//     if(age >=21){
//         return true;
//     }
// })
// console.log(result);f

//we can even further simplfy the above filter method by entering it like this
// const result1 = ages.filter(age => age >=21);
// console.log(result1);

//filter example 2
// const result = companies.filter(company => company.category === "IT");
// console.log(result);

//get 80's companies
// const lastedmorethan10years = companies.filter(company => {
//     let numberparsedstart = parseFloat(company.start);
//     let numberparsedend = parseFloat(company.end);
//     if(numberparsedend - numberparsedstart >= 10){
//         return true;
//     }
// })
// console.log("Employees who lasted 10 years: " + lastedmorethan10years);


//map
// const map1 = ages.map(function (age){
//     let result = age * 2 ;
//     return result;
// })
// console.log(map1);

//map example1
// const map1 = ages.map(age => age * 2);
// console.log(map1);

//map exmaple with Math.sqrt() method
// const result = ages.map(age => Math.sqrt(age));
// console.log(result);

//changing start and end inside company array from str to int using .map() function
// const updatatedcompanies = companies.map(company => {
//     return {
//         name: company.name,
//         category: company.category,
//         start: parseInt(company.start),
//         end: parseInt(company.end)
//     }
// });
// console.log(updatatedcompanies);
// console.log(companies);


//sort
// let sortedages =[]
// for (i=0; i< ages.length; i++){
//     for (j=i+1; j< ages.length; j++){
//         if (ages[i] > ages[j]){
//             temp = ages[j]
//             ages[j] = ages[i]
//             ages[i] = temp
//         }
//     }
//     sortedages.push(ages[i]);
// };
// console.log(sortedages);

// //using .sort() to sort ages array
// const sortedAges = ages.sort((a,b) => a - b);
// console.log(sortedAges);


// //sort with function
// const sortcompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start){ 
//         return 1
//     }else {
//         return -1
//     }
// });
// console.log(sortcompanies);

// //sort with arrow function
// console.log(companies.sort((a1, a2) => a1.start > a2.start ? 1 : -1 ));

//reduce with legacy for loop
// let total = 0;
// for(i = 0; i < ages.length; i++){
//     total += ages[i];
// }
// console.log(total);

// //now with .reduce()
// const agesSum = ages.reduce(function(total, age) {
//     return total + age;
// },0)
// console.log(agesSum);

// //.reduce with Arrow function 
// console.log(companies.filter(company => company.name === "Yash").reduce((total, years) => total +(years.end - years.start), 0));

//multi-dimension array
const companies = [
    {name:"Yash", category:"IT", start:"1989", end:"2000"},
    {name:"Manjil", category:"IT", start:"2021", end:"2023"},
    {name:"Aura", category:"Dynamics", start:"2000", end:"2023"},
    {name:"Mo", category:"IT", start:"2021", end:"2023"},
    {name:"Myriam", category:"IT", start:"1981", end:"1986"},
    {name:"Praneel", category:"Finance", start:"2021", end:"2023"},
    
    
]

const ages = [33,22,11,42,4245,1541,23523];

//map



//forLoops
// for(i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }

// //foreach
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
// console.log(result);

// //we can even further simplfy the above filter method by entering it like this
// const result1 = ages.filter(age => age >=21);
// console.log(result1);//forLoops
// for(i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }

// //foreach
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
// console.log(result);

// //we can even further simplfy the above filter method by entering it like this
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



//sort

//reduce 
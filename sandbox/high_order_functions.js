//multi-dimension array
const companies = [
    {name:"Yash", category:"IT", start:"2021", end:"2023"},
    {name:"Manjil", category:"IT", start:"2021", end:"2023"},
    {name:"Aura", category:"Dynamics", start:"2021", end:"2023"},
    {name:"Mo", category:"IT", start:"2021", end:"2023"},
    {name:"Myriam", category:"IT", start:"2021", end:"2023"},
    {name:"Praneel", category:"Finance", start:"2021", end:"2023"},
    
    
]

const ages = [33,22,11,42,4245,1541,23523];

//foreach




//filter
const candrink = ages.filter( age => {
    if(age >= 21){
        return true;
    }
});
console.log(candrink);

//now this whole thing can be also returned as
const can_drink = ages.filter(ages => ages >=21 );
console.log(can_drink);


//filter
const retailcompanies = companies.filter((company,index) => company.category !== "IT");
console.log(retailcompanies);



//map

//sort

//reduce

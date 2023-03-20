const todo = [
    {
        id: 1,
        text: 'take out bin',
        iscompleted: false
    },
    {
        id:2,
        text: "Don't take bin out",
        iscompleted: true
    },
    {
        id:3,
        text: "What is up my brother",
        iscompleted: false
    }
];

//convert todo string
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

//for of loop
// for (i of todo){
//     console.log(i.text)
// } 


//function
// function addNums(a=1 , b=2){
//     return a + b
// }

const addNums = ((a=1, b=2) => a + b);
console.log(addNums(1,7));


//Constructor Function 
function Address(streetNumber, streetName, suburb, postCode, state){
    this.streetNumber = streetNumber
    this.streetName = streetName
    this.suburb = suburb
    this.postCode = postCode
    this.state = state
}

//Instantiate Object
const Address1 = new Address (548 , 'Anzac Highway', 'Glenelg East', '5045', 'SA');
console.log(Address1); 
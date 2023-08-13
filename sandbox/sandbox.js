// const todo = [
//     {
//         id: 1,
//         text: 'take out bin',
//         iscompleted: false
//     },
//     {
//         id:2,
//         text: "Don't take bin out",
//         iscompleted: true
//     },
//     {
//         id:3,
//         text: "What is up my brother",
//         iscompleted: false
//     }
// ];

//convert todo string
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

//for of loop
// for (i of todo){
//     console.log(i.text)
// } 


//function
// function addNums(a=1 , b=2)
//     return a + b
// }

// const addNums = ((a=1, b=2) => a + b);
// console.log(addNums(1,7));


//Constructor Function 
// function Address(streetNumber, streetName, suburb, postCode, state, DOB){
//     this.streetNumber = streetNumber
//     this.streetName = streetName
//     this.suburb = suburb
//     this.postCode = postCode
//     this.state = state
//     this.DOB = new Date (DOB);
// }
// Address.prototype.getFullAddress = function(){
//     return `${this.streetNumber} ${this.streetName} ${this.suburb} ${this.suburb} ${this.postCode} ${this.state}`
// } 

//Class (this is a better way to define a constructor in JS using Class)
// class Address{
//     constructor (streetNumber, streetName, suburb, postCode, state, DOB){
//         this.streetNumber = streetNumber
//         this.streetName = streetName
//         this.suburb = suburb
//         this.postCode = postCode 
//         this.state = state
//         this.DOB = new Date (DOB)
//     }
//     getFullAddress(){
//         return `${this.streetNumber} ${this.streetName} ${this.suburb} ${this.suburb} ${this.postCode} ${this.state}`
//     }
// }

// // Instantiate Object
// const Address1 = new Address  (548 , 'Anzac Highway', 'Glenelg East', '5045', 'SA', '4-3-1998');
// console.log(Address1)
// console.log(Address1.getFullAddress());


//.reduce() 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ]
// arr2 = [
//     {"id": 3, "x": 5},
//     {'id' : 1, 'x' : 4}
// ]
// i=0 ; j= 0
// let newArr = []
// while(i < arr1.length && j < arr2.length) {
//     if(arr2.includes(arr1[i].id)) {
//         newArr.push(arr1[i++]);
//     }
// }
// console.log(newArr);



// let array1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
// let array2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]
// result = {};
// for (let i = 0; i < array1.length; i++) {
//     result[i] = array1[i]
// }
// console.log(result);


const westeros = {
    cerci : {
        height: "5'10",
        weight: "70 kg",
        canCook : function() {
            console.log('cooking...');
        } 
    },
    jamie : {
        height : "6'3",
        weight: "70 kg",
        canCook : function() {
            console.log('cooking...');
        }
    }   
}

let keys = Object.keys(westeros)
// console.log(keys);
let values = Object.values(westeros);

values.reduce((acc, value) => {
    acc.set(value.height, value)
    return acc
} , new Map());
// console.log(Object.entries(westeros))



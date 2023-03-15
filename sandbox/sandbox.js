const items = ['array' , 'damn this things' , 'what the hell?']

//console.log(Array.isArray(items)); // checks if the item is array or not.


const todos = [
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

//console.log(todos[0].text); //this will print text inside the first element in array

const todoJSON = JSON.stringify(todos);

//looping for loop
todos.forEach(function(todos){
    console.log(todos.text);
});
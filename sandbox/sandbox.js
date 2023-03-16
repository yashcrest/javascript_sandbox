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

//map loop


//filter loop
const thisisfilter = todo.filter(item => {
    return item.id === 3;
});
console.log(thisisfilter);




//console.log(todos[0].text); //this will print text inside the first element in array

const todoJSON = JSON.stringify(todo);

//foreach loop

todo.forEach(item => {

    localStorage.setItem(`Todo ${item.id}`,item.text);
})


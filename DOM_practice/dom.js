let submit = document.querySelector('input[type="submit"]');
let form = document.querySelector("#addForm");
let itemList = document.querySelector('#items');

//Form submit event
form.addEventListener('submit', addItem); 

//addItem 
function addItem(e){
    e.preventDefault();
    
    //Get input value 
    var newItem = document.getElementById('item').value;
    

    //Create new li element
    var li = document.createElement('li');
    var btn = document.createElement('button');
    li.className = 'list-group-item';
    btn.className = 'btn btn-danger btn-sm float-right delete';
    li.appendChild(document.createTextNode(newItem));

    //Add to DOM
    itemList.appendChild(li);
    itemList.appendChild(btn);
    console.log(newItem);
};
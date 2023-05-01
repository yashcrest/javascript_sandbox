let submit = document.querySelector('input[type="submit"]');
let form = document.querySelector("#addForm");
let itemList = document.querySelector('#itemList');
let box = document.querySelector("#box");
let btn = document.querySelector('#button');
let output = document.querySelector("#output");
let filter = document.querySelector("#filter");

//Form submit event
form.addEventListener('submit', addItem); 

//addItem 
function addItem(e){
    e.preventDefault();
    
    //Get input value 
    var newItem = document.getElementById('item').value;

    //Check if the input field is not Null
    if(newItem.length === 0){
        return;
    }
      //Create new li element
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    delBtn.style.marginLeft = '5px';
    li.className = 'list-group-item';
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    li.appendChild(document.createTextNode(newItem));
    delBtn.appendChild(document.createTextNode('X'));

    //Add to DOM
    itemList.appendChild(li);
    li.appendChild(delBtn);

    console.log(newItem);
    document.getElementById('item').value = '';
};

//Delete Event
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        itemList.removeChild(e.target.parentElement);
    } else if(e.target.classList.contains('list-group-item')){
        if (e.target.style.textDecoration === 'line-through'){
            e.target.style.textDecoration = '';
        }else {
            e.target.style.textDecoration = 'line-through';
        }
    }
}

//Filter items
filter.addEventListener('keyup', filterItems );

function filterItems(e){
    //covert text to lowerCase
        var text = e.target.value.toLowerCase();
        //Get List items
        var items = itemList.getElementsByTagName('li');
        //Convert
        Array.from(items).forEach(item => {
            var itemName = item.firstChild.textContent;
            if (itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        })
}

//clickEvent
// btn.addEventListener("click", btnclicked);
// function btnclicked(e){
//     console.log(e);
//     var output = document.querySelector('#output');
//     output.innerHTML = '<h3>'+e.target.id+'</h3>'
//     console.log(e.pageX, e.clientX);
// }

// //mouseMove Event
// box.addEventListener('mousemove',runEvent);
// function runEvent(e){
//     console.log(e.type);
//     output.innerHTML = '<h3>MouseX:'+ e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
//     box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",0)";
// }






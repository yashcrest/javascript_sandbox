const remind_btn = document.querySelector('#remind_btn');
const inputField = document.querySelector("#inputField");
const itemList = document.querySelector('#itemList');
const msg = document.querySelector('#msg');


remind_btn.addEventListener('click' , addItem)

function addItem(e){
    if(inputField.value === ''){
        msg.classList.add('error')
        msg.textContent = "No input received"
        msg.style.display = 'block'
        setTimeout(() => msg.style.display = 'none', 1000);
    } else {
        var li = document.createElement('li') 
        var span = document.createElement('span')
        // var checkbox = docuemnt.createElement('input');
        // checkbox.setAttribute('type','checkbox')
        span.appendChild(document.createTextNode('\u00D7'))
        span.classList = 'close';
        li.appendChild(document.createTextNode(inputField.value));
        li.appendChild(span);
        // li.appendChild(checkbox);
        itemList.appendChild(li);

        //Close button to hide hide the list
        span.onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }

        //Checked symbol while clicking on every list item
        li.addEventListener('click', clicked)
        function clicked(e){
            e.target.classList.toggle('checked');
        }
    }
    inputField.value = '';
}

//Check if any data in Local Storage 
window.onload = getData
const getData = ()=> {
    let tasks = localStorage.getItem('reminders');
    return JSON.parse(tasks);
}


const setData = (data) => {
    localStorage.setItem();
}
const remind_btn = document.querySelector('#remind_btn');
const inputField = document.querySelector("#inputField");
const itemList = document.querySelector('#itemList');
const msg = document.querySelector('#msg');

remind_btn.addEventListener('click', addItems)

function addItems(e){ 
    var  reminder = inputField.value; 
    if(reminder === ''){
        msg.classList.add('error')
        msg.textContent = "No input received"
        msg.style.display = 'block'
        setTimeout(() => msg.style.display = 'none', 1000);
    } else {
        var li = document.createElement('li') 
        var span = document.createElement('span')
        span.appendChild(document.createTextNode('\u00D7'))
        span.classList = 'close';
        li.appendChild(document.createTextNode(reminder));
        li.appendChild(span);
        itemList.appendChild(li);
       
        //Close button to delete the list item
        span.onclick = function(){
            itemList.removeChild(li);
        }

        //Checked symbol while clicking on every list item
        li.addEventListener('click', clicked)
        function clicked(e){
            e.target.classList.toggle('checked');
            
        }
    }
    inputField.value = '';
}

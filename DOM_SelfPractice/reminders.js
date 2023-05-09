const inputField = document.querySelector("#inputField");
const remind_btn = document.querySelector("#remind_btn");
const itemList = document.querySelector("#itemList");
const msg = document.querySelector("#msg");


//On Refresh, get all the items from localStorage
window.onload = loadReminders();

//OnClick AddReminder Button add task
remind_btn.addEventListener('click', addReminder);


function loadReminders(){

    //Check if local storage has any items, if not then return 
    if(localStorage.getItem('reminders') === null) return;

    //Get reminders from localStorage and convert it to an arrray
    let reminders = Array.from(JSON.parse(localStorage.getItem("reminders")));

    reminders.forEach(reminder => {
        //create a list item, and add innerHTML 
        const li = document.createElement('li');
        li.classList = reminder.completed ? ['checked'] : []
        li.innerHTML =`  <span class ='remind' id="task" onClick="checkReminder(this)"> ${reminder.reminder} </span>
        <span class="close" onClick="removeReminder(this)">\u00D7 </span>` ;
        itemList.appendChild(li); 
    })
}

function addReminder(){

    //if the reminder field is empty
    if (inputField.value === ''){
        msg.classList.add('error')
        msg.textContent = "No input received"
        msg.style.display = 'block'
        setTimeout(() => msg.style.display = 'none', 1000);
        return false;
    }

    //add task to local storage 
    localStorage.setItem("reminders", JSON.stringify([...JSON.parse(localStorage.getItem("reminders") || "[]"), {reminder: inputField.value, completed: false}]));

    //create li
    const li = document.createElement('li');
    li.innerHTML = `<span class="remind" onClick="checkReminder(this)">${inputField.value}</span>
    <span class="close" onClick="removeReminder(this)">\u00D7</span>`
    itemList.appendChild(li)
    inputField.value = '';    

}


//onClick for span element
function checkReminder(e){
    let reminders = Array.from(JSON.parse(localStorage.getItem('reminders')));

    const updatedItems = reminders.map(item => { 
        if (item.reminder === (e.parentElement).children[0].innerText) { 
            return {...item, completed: !item.completed};
        }
            else {
                 return item; 
                } 
            }); 

    localStorage.setItem("reminders", JSON.stringify(updatedItems));
    e.parentElement.classList.toggle('checked');
}


function removeReminder(e){
    let reminders = Array.from(JSON.parse(localStorage.getItem("reminders")));
    localStorage.setItem("reminders", JSON.stringify(reminders.filter(item => item.reminder != e.parentElement.children[0].innerText)));
    e.parentElement.remove();
}

const form = document.querySelector('#my-form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameField.value === '' || emailField.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields"
        msg.style.display = 'block';
        setTimeout(() => msg.remove(), 2000);
    }
     else {
        form.style.background = '#ccc';
        console.log('success!');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameField.value} : ${emailField.value}`));

        users.appendChild(li);

        //clear fields 
        nameField.value = '';
        emailField.value = ''; 
    }
}

 
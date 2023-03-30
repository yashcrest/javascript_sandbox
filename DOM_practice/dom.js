// console.dir(document);
// console.log(document.all);
// document.title = "Yash's Sandbox"
// console.log(document.all[10]);
// document.all[10].innerHTML = 'changed';
// document.all[13].textContent = 'changed again';
// console.log(document.forms)
// console.log(docuemnt.links)

// console.log(document.getElementById("header-title"));
// console.log(document.getElementById('header-title'))

let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);

// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor  = 'yellow'; 

// items.style.backgroundColor = 'yellow';

for(let i =0; i< items.length; i++){
    items[i].style.backgroundColor = 'yellow';
}

items.forEach((element,index) => {
    element[index].style.backgroundColor = 'yellow'
});
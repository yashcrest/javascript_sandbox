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

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);

// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor  = 'yellow'; 

// items.style.backgroundColor = 'yellow';

// for(let i =0; i< items.length; i++){
//     items[i].style.backgroundColor = 'yellow';
// }

//queryselector
// let tests = document.querySelectorAll('li');
// for (i =0; i<tests.length; i++){
//     tests[i].style.borderBottom = 'solid 4px grey';
// }

// let input = document.querySelector('input');
// input.placeholder = 'Hello world';
// console.log(input);

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// //QuerySelectorAll 
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');
// odd.forEach(item => item.style.backgroundColor = '#f4f4f4');
// even.forEach(item => item.style.backgroundColor = '#ccc');


//Traversing the DOM
let itemList = document.querySelector('#Items');
let form = document.querySelector('form');
//parentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode); 

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);

//fistChild
// console.log(itemList.lastElementChild);

//nextSiblig
// console.log(form.nextSibling);
//nextElementSibling
// console.log(itemList.nextSibling);  
//previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);


//CreateElement
let newDiv = document.createElement('div');
newDiv.className ='created-via-JS';
newDiv.id = 'myDiv'
console.log(newDiv);

//creating a text node
let newDivtext = document.createTextNode('This is created via JS');
newDiv.appendChild(newDivtext);

//adding the element to DOM
let container = document.querySelector('header .container ');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

//Event Listner
let btn = document.querySelector('#button');
btn.addEventListener('click',()=> {
    document.getElementById('myDiv').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
});
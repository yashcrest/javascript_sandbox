//single element


//multiple element
// document.querySelectorAll('li ').forEach(item => console.log(item));

//selecting middle item
// const ul = document.querySelector('.items');
// ul.children[1].textContent = "changed with JS";


const btn = document.querySelector('.btn');
const form = document.querySelector("#my-form")
const initialColor = form.style.background;
let isInitialColor = true;


//changing button style with JS
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isInitialColor){
        form.style.background = "#ccc";
    }
    else{
        form.style.backgroundColor = initialColor;
    }
    isInitialColor = !isInitialColor;

    document.querySelector(".items").children[1].innerHTML = '<h1>changed</h1>'

})
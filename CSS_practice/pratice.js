const form = document.querySelector('.my-form');
form.addEventListener('submit', item);
function item(e){
    e.preventDefault();
    console.log(e)
}

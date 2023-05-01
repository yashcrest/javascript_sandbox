const container = document.getElementById('container');
const template = document.getElementById('template');
const button = document.getElementById('add_btn'); 


let items = getItems();

 function getItems(){
    const value = localStorage.getItem("todoitem") || "[]" ;
    return JSON.parse(value) //this is needed to convert the JSON string from the result 
    // item to an actual JavaScript Object.
} 

// now, so whenever a user has added an item of changed an item  we will basically need to refresh the item list.
function setItems (items){
    const itemsJSON = JSON.stringify(items); //converting JS Object to JSON string.(reason being can be saved in browser Local Storage)
    localStorage.setItem("todoitem" , itemsJSON); //if not sure what values does "localstorage.setItem" takes, hover mouse after typing localStorage.setItem
}

//adding a new item
function addItem(){
     items.unshift({
        description: "",
        completed: false
     }); //this lets us add new element to the beginning of array
     setItems(items); //this will save the new item to the local storage
     refreshList();
}
 
//for updating items to save the reminders
function updateItem (item, key, value){
    item[key] = value; // I DIDN'T understand this line.
    setItems(items);
    refreshList();

}
//this function will take the items variable 
function refreshList(){
    //  sort items later

    // now, whenever a user make any changes to the list, we want to refresh and render the list again with new data
    container.innerHTML = ""; 
    for (const item  of items) { // this loop is here because it is needed for every single reminder the user set 
        const itemElement = template.content.cloneNode(true); // we are taking the content inside the template emelemt and cloning it.
        const descriptionInput = itemElement.querySelector("#inputField");
        const checkbox = itemElement.querySelector("#checkbox");

        descriptionInput.value = item.description;
        checkbox.checked = item.completed;

        descriptionInput.addEventListener('c hange' , ()=> {
              updateItem(item, "description" , descriptionInput.value)
        } )

        descriptionInput.addEventListener('change' , ()=> {
            updateItem(item, "completed" , checkbox.checked);
      } )

        container.append(itemElement);//now we are appending the new changes to the div tag that was previously empty. (refer to the div tag with container ID in HTML)
    }
}

button.addEventListener("click", addItem)
refreshList();
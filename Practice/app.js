let url = "https://opentdb.com/api.php?amount=10&category=10"

function fetchData(url){
     fetch(url).then((res) => res.json()).then((data) => console.log(data)).catch(error => console.log(error));
}

fetchData();
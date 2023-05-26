
//Promise example 1
// const userLeft = false;
// const userWatchingMeme = true;

// function watchTutorial(){
//     return new Promise ((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: 'User left',
//                 message: ':('
//             })
//         } else if(userWatchingMeme){
//             reject({
//                 name : 'User Watching Cat meme',
//                 message: 'Cat > YOU'
//             })
//         } else {
//             resolve ('Thumbs up and Fuck YourSelf')
//         }
//     })
// }

// watchTutorial().then((message)=> {
//     console.log('Success:' + message)
// }).catch((error)=> {
//     console.log(error.name + '' + error.message)
// }) 




// //Promise example 2
// const posts = [
//     { title: 'Post 1', body: 'This is post one'},
//     { title: 'Post 2', body: 'This is post two'}
// ];

// function getPosts(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post,index) => {
//             output += `<li>${post.body}</li>`
//         })
//         document.body.innerHTML = output
//     },500);
// }

// function createPost(post) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;

//             if (!error){
//                 resolve('Success');
//             }else{
//                 reject('Error: Something went wrong');
//             }
//         }, 1000);
//     });
// }

// createPost({title: 'Post 3', body:'This is post three'}).then(getPosts).catch(err => {
//     console.log(err);
// })



// // //Promise.ALL
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('http://api.weatherapi.com/v1/current.json?key=34d6d8dc8a584ef6b4d92016232105&q=kathmandu&aqi=no').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>{
//     console.log(values);
// });



//Async / Await
// async function fetchUsers() {
//     const response = await fetch('http://api.weatherapi.com/v1/current.json?key=34d6d8dc8a584ef6b4d92016232105&q=kathmandu&aqi=no')
//     const data = await response.json();
//     console.log(data);
// }
// fetchUsers();



//Promises and Async/Await Example
function makeRequest(location) {
    return new Promise ((resolve,reject)=> {
        console.log(`Making request to ${location}`)
        if (location === 'Google'){
            resolve('Google says Hi')
        } else {
            reject('We can only make request to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })


//Now using Async/Await
async function doWork(){
   const response =  await makeRequest('Google')
   console.log('response received')
   const processedResponse = await processRequest(response)
   console.log(processedResponse);
}

doWork();
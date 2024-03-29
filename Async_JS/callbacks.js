// Mimicing blog post on a server
const posts = [
    {
        title: 'Post 1',
        body: 'This is post one'
    },
    {
        title: 'Post 2',
        body: 'This is post two'
    }
];

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index) => {
            output += `<li>${post.body}</li>`
        })
        document.body.innerHTML = output
    },500);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}

createPost({title:'Post 3', body:'This is post three'}, getPosts);



/* Bsic concept code of load posts and display on the website with CSS dynamically
 */
//this function use to fetch data from API server
function loadpost(){
    //fetch('url of API')
    //fetch is like browser API or Browser system
    fetch('https://jsonplaceholder.typicode.com/posts')
    //Parse the response body as JSON when the promise resolves
    //res.json()) like JSON -> JS obj/array or JSON.parse()
    .then(res => res.json()) 
    //When the data promise resolves, call the displayPost() function to display the post
    .then(data => displayPost(data))    //here call displayPost(data) with argument data
}
/* 
Element add by 4 step
1. get the container element where to add
2. Create child element
3. Set innerText of innerHTML
4. appendchild
*/

function displayPost(posts){    //set function parameter posts
    // 1. get the container element where to add
    const postscontainer = document.getElementById('post-container');   //put the line out of the loop cz get container element once
    
    for(const post of posts){   //post of posts
        // 2. Create child element
        const postDiv = document.createElement('div');
        //add style class on postDiv
        postDiv.classList.add('post')
        console.log(post);
        // 3. Set innerText of innerHTML
        //load dynamic id, title, body
        postDiv.innerHTML = `
            <h3>User - ${post.id}</h3>   
            <h5>Title: ${post.title}</h5>
            <p>Post Description ${post.body}</p>
        `
        // 4. appendchild
        postscontainer.appendChild(postDiv);
    }
}
//call the function autometically load cz it connected with post.html
loadpost();
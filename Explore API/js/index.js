function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers2(data))  //data pass to the function
}

function displayUsers2(data){
    console.log(data);
    for(const user of data){
        console.log(user.name);
    }

    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        // ----------
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
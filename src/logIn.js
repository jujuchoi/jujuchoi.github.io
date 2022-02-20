const loginForm = document.querySelector('#logIn');
const loginInput = document.querySelector('#inputUsername');
const greeting = document.querySelector('#greeting');

const userKey = "username";

function clickLoginBtn(event){
    event.preventDefault();
    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name!");
    } else if (username.length > 15){
        alert("Your name is too long");
        loginInput.value = '';
    } else {
        console.log(username);
        loginForm.setAttribute('style', 'display:none');
        localStorage.setItem(userKey, username);
        paintGreeting(username);
    }
}

function paintGreeting(username){
    greeting.innerText = `${username}`;
    greeting.setAttribute('style', 'display:flex');
}

loginForm.addEventListener("submit", clickLoginBtn);

const savedUsername = localStorage.getItem(userKey);

if(savedUsername === null){
    loginForm.setAttribute('style', 'display:flex');
} else {
    paintGreeting(savedUsername);
}
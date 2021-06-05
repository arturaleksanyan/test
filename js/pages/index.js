import { login } from "../api/api.js";


window.addEventListener('load', async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
        window.location.href = '/channels.html';
    } 
    const loginButton = document.getElementById('login')
    loginButton.addEventListener('click', async () => {
        const error = document.getElementById('error');
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const response = await login(email, password);
        if (response.error ) {
           error.innerText = response.message;
        } else {
            window.localStorage.setItem('token', response.message);
            window.location.href = './channels.html';    
        };   
    });
});
    
   
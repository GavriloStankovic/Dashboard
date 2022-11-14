import { isValid } from "./users.js";

const inputUsername = document.querySelector('#user')
const inputPassword = document.querySelector('#password')
const forma = document.querySelector('form')

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    if(isValid(inputUsername, inputPassword, forma)){
        if(inputUsername.value.trim() === 'admin'){
            window.location.href = 'adminpage.html'
        } else {
            window.location.href = 'userpage.html'
        }
    }
})
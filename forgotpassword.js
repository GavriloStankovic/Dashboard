import { changePassword } from "./users.js";

const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#newPassword')
const inputnewPassword = document.querySelector('#confPassword')
const forma = document.querySelector('form')

forma.addEventListener('submit', (e) => {
    if(changePassword(inputEmail, inputPassword, inputnewPassword)){
        window.location.href = 'login.html'
    }
})


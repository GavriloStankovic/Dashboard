const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputDateofBirth = document.querySelector('#date')
const inputPhoneNumber = document.querySelector('#tel')
const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confirmPassword')
const forma = document.querySelector('form')

let newUser = {}
let freeUsername = false

inputUsername.addEventListener('focusout', (e) => {
    let usersList = JSON.parse(localStorage.getItem('users'))
    freeUsername = true

    usersList.forEach(element => {
        if(inputUsername.value.trim() === element.username){
            freeUsername = false
        }
    });

    if(freeUsername === true){
        inputUsername.style.border = '2px solid #0f0'
    } else {
        inputUsername.style.border = '2px solid #f00'
    }
})

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    let acceptPhone = false
    let acceptPassword = false
    let usersList = JSON.parse(localStorage.getItem('users'))

    newUser = {
        firstName: inputFirstName.value.trim(),
        lastName: inputLastName.value.trim(),
        username: '',
        password: '',
        email: inputEmail.value.trim(),
        dateofBirth: inputDateofBirth.value,
        phoneNumber: '',
        isAdmin: false
    }

    if(inputPhoneNumber.value.trim().length === 9 || inputPhoneNumber.value.trim().length === 10){
        acceptPhone = true
        newUser.phoneNumber = '+381/' + inputPhoneNumber.value.trim().substring(1)
    } else {
        alert('You must enter correct phone number!')
        return
    }

    if(inputPassword.value.trim() === inputConfirmPassword.value.trim()){
        acceptPassword = true
        newUser.password = inputConfirmPassword.value.trim()
    } else {
        alert('You must enter same password combinations')
        return
    }

    if(freeUsername === true){
        newUser.username = inputUsername.value.trim()
    } else {
        alert('Choosen username already exsist, please try with another username!')
        return
    }

    if(acceptPassword && acceptPhone && freeUsername) {
        usersList.push(newUser)
        localStorage.setItem('users', JSON.stringify(usersList))
        inputUsername.style.border = '2px solid #68e0cc'
        alert('You are successfully registred')
        window.location.href = 'login.html'
    }
})
export const isValid = (username, password, forma) => {
    let usersList = JSON.parse(localStorage.getItem('users'))
    let usernameExsist = false
    let userExsist = false

    if (username.value.trim() === '' && password.value.trim() === '') {
        alert('You must enter username and password!')
        forma.reset()
        return
    }

    if (username.value.trim() === '') {
        alert('You must enter username!')
        return
    }

    if (password.value.trim() === '') {
        alert('You must enter password!')
        return
    }

    usersList.forEach(element => {
        if (username.value.trim() === element.username) {
            usernameExsist = true
            if (password.value.trim() === element.password) {
                userExsist = true
            } else {
                alert('You must enter correct password!')
            }
        }
    });

    if (!userExsist && !usernameExsist) {
        alert('You must register first')
        forma.reset()
        return
    }

    return userExsist
}

export const changePassword = (email, newPassword, confirmNewPassword) => {
    let usersList = JSON.parse(localStorage.getItem('users'))
    let userFounded = false
    let userIndex

    usersList.forEach(element => {
        if (email.value.trim() === element.email) {
            userFounded = true
            userIndex = element
        } else {
            userFounded = false
        }
    })

    if (userFounded === true) {
        if (newPassword.value.trim() === confirmNewPassword.value.trim()) {
            usersList[userIndex].password = confirmNewPassword.value.trim()
        } else {
            alert('Entered passwords must be same')
        }
    } else {
        alert('Email you entered doesnt exsist!')
    }
}


export const deleteUsers = (divRows, usersList) => {
    for (let i = 0; i < divRows.length; i++) {
        if (divRows[i].classList.contains('marked')) {
            usersList.splice(i + 1, 1)
            divRows.splice(i, 1)
            i--
        }
    }
}

export let usersList = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        firstName: 'Milica',
        lastName: 'Jovic',
        username: 'jovicm21',
        password: 'svezablok21',
        dateOfBirth: '2002-14-08',
        email: 'milica.jovic21blok@gmail.com',
        phoneNumber: '+381/642583366',
        isAdmin: false
    },
    {
        firstName: 'Miljan',
        lastName: 'Radulovic',
        username: 'ljanmimiami',
        password: 'coding123',
        dateOfBirth: '1998-31-08',
        email: 'miljan.radulovic98@gmail.com',
        phoneNumber: '+381/612250809',
        isAdmin: false
    },
    {
        firstName: 'Marija',
        lastName: 'Mrdja',
        username: 'makazvaka',
        password: 'horseland2022',
        dateOfBirth: '2004-14-06',
        email: 'makadebeotesto@gmail.com',
        phoneNumber: '+381/654437171',
        isAdmin: false
    },
    {
        firstName: 'Gavrilo',
        lastName: 'Stankovic',
        username: 'kingoftheworld',
        password: 'moneymaker123',
        dateOfBirth: '1995-24-04',
        email: 'stankovic.gavrilo@gmail.com',
        phoneNumber: '+381/692280188',
        isAdmin: false
    }
]

if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(usersList))
}
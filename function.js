export const renderBase = (writteUsers) => {
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    divRow.id = 'mainRow'

    const pFirstName = document.createElement('p')
    pFirstName.textContent = 'First Name'

    const pLastName = document.createElement('p')
    pLastName.textContent = 'Last Name'

    const pUsername = document.createElement('p')
    pUsername.textContent = 'Username'

    const pPassword = document.createElement('p')
    pPassword.textContent = 'Password'

    const pDateofBirth = document.createElement('p')
    pDateofBirth.textContent = 'Date of Birth'

    const pEmail = document.createElement('p')
    pEmail.textContent = 'Email'

    const pPhoneNumber = document.createElement('p')
    pPhoneNumber.textContent = 'Phone Number'

    divRow.append(
        pUsername,
        pFirstName,
        pLastName,
        pEmail,
        pPassword,
        pPhoneNumber,
        pDateofBirth
    )

    writteUsers.appendChild(divRow)
}

export const renderAdminPage = (writteUsers, searchedUsers) => {
    let usersList = searchedUsers === undefined ? JSON.parse(localStorage.getItem('users')) : searchedUsers

    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].isAdmin)
            continue

        const divRow = document.createElement('div')
        divRow.classList.add('row')
        divRow.classList.add('usersHolder')

        const pFirstName = document.createElement('p')
        pFirstName.textContent = usersList[i].firstName

        const pLastName = document.createElement('p')
        pLastName.textContent = usersList[i].lastName

        const pUsername = document.createElement('p')
        pUsername.textContent = usersList[i].username

        const pPassword = document.createElement('p')
        pPassword.textContent = usersList[i].password

        const pDateofBirth = document.createElement('p')
        pDateofBirth.textContent = usersList[i].dateOfBirth

        const pPhoneNumber = document.createElement('p')
        pPhoneNumber.textContent = usersList[i].phoneNumber

        const pEmail = document.createElement('p')
        pEmail.textContent = usersList[i].email

        divRow.append(
            pUsername,
            pFirstName,
            pLastName, 
            pEmail,
            pPassword,
            pPhoneNumber,
            pDateofBirth
        )

        writteUsers.appendChild(divRow)

        divRow.addEventListener('click', (e) => {
            if(!divRow.classList.contains('marked')){
                divRow.classList.add('marked')
                divRow.style.backgroundColor = '#262155'
                divRow.style.borderRadius = '2rem'
            } else {
                divRow.classList.remove('marked')
                divRow.style.backgroundColor = '#0e0c1f'
            }
        })
    }
}
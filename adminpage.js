import { renderBase, renderAdminPage } from "./function.js";
import { deleteUsers } from "./users.js";

const writteUsers = document.querySelector('.main')
const deleteUsersButton = document.querySelector('#delete')
const searchUsers = document.querySelector('#text')

renderAdminPage(writteUsers)

deleteUsersButton.addEventListener('click', (e) => {
    let divRows = []
    let usersList = JSON.parse(localStorage.getItem('users'))

    for(let i = 1; i < writteUsers.children.length; i++){
        divRows.push(writteUsers.children[i])
    }

    deleteUsers(divRows, usersList)
    localStorage.setItem('users', JSON.stringify(usersList))
    writteUsers.textContent = ''
    renderBase(writteUsers)
    renderAdminPage(writteUsers)
})

searchUsers.addEventListener('keyup', (e) => {
    const searchStrings = e.target.value
    let usersList = JSON.parse(localStorage.getItem('users'))
    writteUsers.textContent = ''
    const filteredUsers = usersList.filter(user => {
        return user.username.includes(searchStrings)
    })
    renderBase(writteUsers)
    renderAdminPage(writteUsers, filteredUsers)
})

'use strict'

const os = require('os')
const fs = require('fs')

function addUser(user){
    fs.appendFile('users.txt',user+os.EOL, err => {
        if (err) throw err
        console.log("User added : ")
        console.log(user)
    })
}

function searchUser(id){
    var data =  fs.readFileSync('users.txt')
    var users = data.toString().split(os.EOL);
    users.pop()
    return users.filter( user => JSON.parse(user).id == id)
}

module.exports = {addUser, searchUser}
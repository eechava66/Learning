'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

let port = 4000
let app = express()


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/registerUser', (req,res) => {    
    console.log('POST')
    const { body } = req
    const user = JSON.stringify(body)
    db.addUser(user)
    res.sendStatus(200)
})

app.post('/searchUser', (req,res) => {
    console.log('GET')
    var user = db.searchUser(req.body.id, res)
    res.send(user)
})

app.listen(port, function () {
    console.log("App on port :"+port)
}) 
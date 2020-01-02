'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

let port = 4000
let app = express()


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/registerUser', (req,res) => {    
    const { body } = req
    const user = JSON.stringify(body)
    db.addUser(user)
    res.sendStatus(200)
})

app.post('/searchUser/:id', (req,res) => {
    var user = db.searchUser(req.params.id, res)
    res.send(JSON.parse(user))
})

app.listen(port, function () {
    console.log("App on port :"+port)
}) 
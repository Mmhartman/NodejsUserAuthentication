const express = require ('express')
const app = express()

const users = []

app.get('/users', (req, res) => {
    res.json()
})

app.listen(3000)

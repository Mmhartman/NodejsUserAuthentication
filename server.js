const express = require ('express')
const app = express()


app.use(express.json())  // this will allow application to accept JSON 

const users = []

// GET
app.get('/users', (req, res) => {
    res.json(users)
})

// POST
app.post('/users', (req, res) => {
    const user = { name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send()
})


app.listen(3000)

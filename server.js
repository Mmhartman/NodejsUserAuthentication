const express = require ('express')
const app = express()
const bcrypt = require('bcrypt') 


app.use(express.json())  // this will allow application to accept JSON 

const users = [] // You can add a name [{name: 'Name'}]

// GET
app.get('/users', (req, res) => {
    res.json(users)
})

// POST
app.post('/users', async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) // append with salt
    // put directly into the users 
        const user = { name: req.body.name, password: hashedPassword} // salt is already saved inside hashedPassword 
    
    users.push(user) 
    res.status(201).send() // sent blank response to the user
    }

    catch { //  in case something goes wrong we can just set a status
        res.status(500).send()
    }

})

//  LISTEN
app.listen(3000)

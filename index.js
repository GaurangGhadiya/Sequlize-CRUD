const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')

 const userControlller = require('./controller/user')
require('./models')
const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get('/getUser', userControlller.getUser)
app.post('/addUser', userControlller.addUser)
app.get('/getUserById/:id', userControlller.getUserById)
app.post('/updateUser', userControlller.updateUser)
app.get('/deleteUser/:id', userControlller.deleteUser)


app.listen('5000', async (req, res) => {
    try {
        console.log('listening on 5000')
    } catch (error) {
        console.log("failed to listen")
        
    }
})
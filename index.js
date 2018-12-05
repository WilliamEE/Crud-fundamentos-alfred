
const express = require('express')
const apiRoutes = require('./routes/api')
const app = express()
const port = process.env.PORT || '3000'
const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/openwebinars'
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(mongoUri)
app.use(bodyParser.json()) //Convertira el cuerpo en un objeto json
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/api/posts/',apiRoutes.loadPost)
app.get('/api/posts/:id',apiRoutes.loadPost)
app.post('/api/posts/',apiRoutes.newPost)
app.put('/api/posts/',apiRoutes.updatePost)
app.delete('/api/posts/:id',apiRoutes.deletePost)



app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})

function handleError(err){
    console,error(`[Error] ${err.message}`)    
    console.error(err.stack)
}

app.on('error', (err) => handleError)
app.on('uncaughtException', (err) => handleError)
app.on('unhandleRejection', (err) => handleError)
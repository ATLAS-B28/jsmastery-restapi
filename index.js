import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5500
//initialize body parser
app.use(bodyParser.json())//we use json data in this project
app.use('/users',usersRoutes)
//make app listen
//to create routes
app.get('/',(req,res)=>{//"/" is the homepage
    res.send("hello guys.")
})//get type route
app.listen(PORT,()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
})
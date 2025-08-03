import express from "express"
import bodyParser from 'body-parser';
import userRouter from "../CRUD API/route/userinfo.js"

const app = express();

// middleware
app.use(bodyParser.json());
app.use('/users' , userRouter)


const PORT = 5000;

app.get('/', (req, res) =>{
res.send('Home')
})

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port: ${PORT}`)
})
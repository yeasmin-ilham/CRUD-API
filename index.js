import express from "express"
const app = express();
import userRouter from "../CRUD API/route/userinfo.js"

app.use('/users' , userRouter)

const PORT = 5000;

app.get('/', (req, res) =>{
res.send('Home')
})

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port: ${PORT}`)
})
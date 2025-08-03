import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

const allusers = [

]


// middleware get req, find all user
router.get('/', (req, res ) => {
    console.log(allusers)
    res.send(allusers)
})

// middleware post req, create new user
router.post('/', (req, res) => {
    const newUser = req.body;
    allusers.push({...newUser, id:uuidv4()})

    res.send(`new user added`)
})

// middleware get req, finds 1 user deatails
router.get('/:id', (req, res) => {
    const {id} = req.params;
  const user= allusers.find((user) => user.id === id)
   if(user){
     res.send(` 1 user deatails, --id:${id}`)
   }else{
    res.status(404).send(` user not found ${id}`)
   }

})


// middleware delete req, delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    allusers.filter((user) => user.id !== id )
    res.send(`user id: ${id} deleted`)
})


// middleware patch req , update user
router.patch('/:id', (req, res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    allusers.find((userCollect) => userCollect.id === id)
    if(firstName){
        userCollect.firstName = firstName;
    }
 if(lastName){
        userCollect.lastName = lastName;
    }
     if(age){
        userCollect.age = age;
    }


    res.send(`user id: ${id} updated`)
})

export default router;
import {v4 as uuidv4} from 'uuid'
let users =[]
export const getAllUsers = (req,res)=>{//'/' here it means users route 
    //console.log(users);
    res.send(users)
}
export const createUsers = (req,res)=>{
    
    const user=req.body;
    //use the uuid to get an id
    //to add id to the objects we use object and within spread operator
    users.push({...user,id:uuidv4()})//push the user
    res.send(`User with the name ${user.firstname} is added`)
}
export const getOneUser = (req,res)=>{
    //to get the id we use req.params
   const{id}=req.params;
   //now to get the user data for the id 
   //so to find the users
   const foundusers= users.find((user)=> user.id === id)
    res.send(foundusers)
}
export const deleteUsers = (req,res)=>{
    const{id}=req.params;
    //to remove those for whom the func. returns false except the one
    //we want to delete
    users= users.filter((user)=> user.id !== id)//if id specified is true
    //then
     res.send(`User with id ${id} deleted from the database`)
}
export const updateUsers = (req,res)=>{
    const {id}= req.params
    const {firstname,lastname,age} = req.body
    const user = users.find((user)=> user.id === id)
    //after finding the user we check and reassign the values 
    //now send the things to be updated
    if(firstname) user.firstname = firstname
    
    if(lastname) user.lastname = lastname
    
    if(age)  user.age = age
    
    res.send(`User details of is ${id} has been updated`)
}
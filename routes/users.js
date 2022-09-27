import express from 'express'

import { getAllUsers,createUsers, getOneUser, deleteUsers, updateUsers } from '../controllers/users'
const router = express.Router()
let users =[]
router.get('/',getAllUsers)
router.post('/',createUsers)//post some data
router.get('/:id',getOneUser)
//for put and delete
router.delete('/:id',deleteUsers)
//update
router.patch('/:id',updateUsers)

export default router
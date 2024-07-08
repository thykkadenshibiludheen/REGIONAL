import express from 'express'
import { loginUser,registerUser, userList, userUpdate } from '../controllers/userController.js'


const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get('/list',userList)
userRouter.put('/update',userUpdate)

export default userRouter
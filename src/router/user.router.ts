import express from 'express';
import user from '../controller/user'

const userRouter = express.Router();

userRouter.post('/user', user.createUserController);

export default userRouter;
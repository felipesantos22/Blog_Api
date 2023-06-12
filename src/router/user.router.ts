import express from 'express';
import user from '../controller/user'

const userRouter = express.Router();

userRouter.post('/user', user.createUserController);
userRouter.get('/user', user.readUserController);
userRouter.get('/user/:id', user.readUserIdController);
userRouter.put('/user/:id', user.updateUserController);

export default userRouter;
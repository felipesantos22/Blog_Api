import { Request, Response } from 'express'
import user from '../services/user'

async function createUserController(req: Request, res: Response) {
    const { email, name } = req.body;
    const create = await user.createUserService(email, name);
    console.log(create);
    return res.json(create);
}

async function readUserController(req: Request, res: Response) {
    const read = await user.readUserService();
    return res.json(read);
}

async function readUserIdController(req: Request, res: Response) {
    const { id } = req.params;
    const readId = await user.readUserId(id)
    return res.json(readId);
}

async function updateUserController(req: Request, res: Response) {
    const { id } = req.params;
    const { email, name } = req.body;
    const update = await user.updateUserService(id, email, name);
    return res.json(update);
}

export default { createUserController, readUserController, readUserIdController, updateUserController };
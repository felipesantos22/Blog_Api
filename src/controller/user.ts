import { Request, Response } from 'express'
import user from '../services/user'

async function createUserController(req: Request, res: Response) {
    const { email, name } = req.body;
    const create = await user.createUserService(email, name);
    console.log(create);
    return res.json(create);
}

export default { createUserController };
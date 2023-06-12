import { PrismaClient } from "@prisma/client";
import userDTO from "../interfaces/user";


const prisma = new PrismaClient();

async function createUserService(email: string, name: string) {
    const create = prisma.user.create({
        data: {
            email,
            name
        }
    });
    return create
}

export default { createUserService };

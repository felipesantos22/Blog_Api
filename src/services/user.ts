import { PrismaClient } from "@prisma/client";

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

async function readUserService() {
    const read = prisma.user.findMany();
    return read;
}

async function readUserId(id: string) {
    const readId = prisma.user.findUnique({
        where: {
            id
        }
    });
    return readId;
}

async function updateUserService(id: string, email: string, name: string) {
    const update = prisma.user.update({
        data: {
            email,
            name
        },
        where: {
            id
        }
    });
    return update;
}

export default { createUserService, readUserService, readUserId, updateUserService };

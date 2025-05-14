import { Task as TaskPrisma, User } from "@prisma/client";
import { prisma } from "../prisma/client";
import { compare, hash } from "bcryptjs";
import { FastifyInstance } from "fastify";

class UserService {

    public async register({ name, email, password, birthDate }: CreateUserType): Promise<void> {

        const userExist = await prisma.user.findUnique({
            where: { email: email }
        })

        if (userExist) {
            throw new Error("E-mail já cadastrado !!!")
        }

        const passwordHashed = await hash(password, 10)

        const user: User = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            passoword: passwordHashed,
            birthDate: new Date(birthDate),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await prisma.user.create({ data: user })


    }

    public async login({ email, password }: LoginType, app: FastifyInstance): Promise<string | null> {

        const user = await prisma.user.findUnique({ where: { email: email } })

        if (!user) {
            throw new Error("Credenciais Inválidas !!!")
        }

        const passowordIsValid = await compare(password, user.passoword)

        if (!passowordIsValid) {
            throw new Error("Credenciais Inválidas !!!")
        }



        return app.jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            createdAt: user.createdAt,
            updatedAte: user.updatedAt
        })
    }
}

export const userService = new UserService();


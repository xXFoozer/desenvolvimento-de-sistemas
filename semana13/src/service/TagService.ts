import { prisma } from "../prisma/client";
import { Tag as TagPrisma } from "@prisma/client";


class TagService {
    public async create(name: string): Promise<void> {
        const tag: TagPrisma = {
            id: crypto.randomUUID(),
            name: name

        }

        await prisma.tag.create({ data: tag })
    }

    public async relation(taskId: string, tagId: string): Promise<void> {
        const task = await prisma.task.findUnique({ where: { id: taskId } })
        if (!task) {
            throw new Error("Essa tarefa Não existe")
        }

        const tag = await prisma.tag.findUnique({ where: { id: tagId } })
        if (!tag) {
            throw new Error("Essa TAG Não existe")
        }

        await prisma.taskTag.create({ data: { 
            taskId: taskId,
            tagId: tagId
        } })


    }
}

export const tagService = new TagService();

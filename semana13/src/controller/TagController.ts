import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { tagService } from "../service/TagService";

export async function tagController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate)

    app.post("/tag", async (request, reply) => {
        const tagContent = request.body as { name: string };

        try {
            await tagService.create(tagContent.name);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.post("/tag/relation", async (request: FastifyRequest, reply: FastifyReply) => {
        const { taskId, tagId } = request.body as { taskId: string, tagId: string };

        try {
            await tagService.relation(taskId, tagId);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(400).send({ erro: error.message })
        }

    })
    //Não equece do register no SERVER 
}
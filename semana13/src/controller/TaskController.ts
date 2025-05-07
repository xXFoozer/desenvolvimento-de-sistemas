import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {

    app.post("/task", (request, reply) => {
        //PEGAR INFO DO FRONT OU DE QM CHAMAR O ENDPOINT (TEXT)
        const body = request.body as { text: string };

        try {
            //RETORNA INFORMAÇÃO
            taskService.create(body.text);
            return reply.code(201).send(body);
        } catch (error: any) {
            return reply.code(409).send({ error: error.message })
        }
    })

    app.get("/task", (_, reply) => {
        const list = taskService.getAll()
        return reply.code(200).send(list);
    })

    app.get("/task/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const task = taskService.getById(id);
        return reply.code(200).send(task);
    })

    app.patch("/task/:id/completed", (request, reply) => {
        //PEGA INFO
        const { id } = request.params as { id: string };
        const { completed } = request.body as { completed: boolean };

        //REPASSA INFO RECEBIDA E RECEBE INFO PROCESSADA
        //RETORNA UMA RESPONSE PRA QUEM CHAMOU

        try {
            const task = taskService.completed(id, completed);
            return reply.code(200).send(task);

        } catch (error: any) {
            return reply.code(404).send({ error: error.message })
        }

    })
    app.patch("/task/:id/text", (request, reply) => {
        const { id } = request.params as { id: string };
        const { text } = request.body as { text: string };

        try {
            const task = taskService.updateText(id, text)
            return reply.code(200).send(task)

        } catch (error: any) {

            return reply.code(404).send({ error: error.message })
        }



    })

    app.delete("/task/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as {id: string}
        taskService.delete(id)
        return reply.code(200).send();
    })
}
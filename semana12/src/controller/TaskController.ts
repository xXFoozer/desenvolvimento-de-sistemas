import { FastifyInstance } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {

    app.post("/task", (request, reply) => {
        //PEGAR INFO DO FRONT OU DE QM CHAMAR O ENDPOINT (TEXT)
        const body = request.body as { text: string };

        try{
            //RETORNA INFORMAÇÃO
            taskService.create(body.text);
            return reply.code(201).send(body);
        }catch(error: any){
            return reply.code(409).send({error: error.message})
        }

       
    })

    app.get("/tasks", (_, reply) => {
        const list = taskService.getAll()
        return reply.code(200).send(list);
    })

}
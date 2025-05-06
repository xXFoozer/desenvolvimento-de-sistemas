import fastify from "fastify";
import { taskController } from "./controller/TaskController";

const app = fastify();



app.register(taskController)

const PORT = 3333
app.listen({ port: PORT }).then(() => {
    console.log(`Backend rodando na porta ${PORT}`)
})

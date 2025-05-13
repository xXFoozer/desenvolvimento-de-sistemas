import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { userController } from "./controller/UserController";

const app = fastify();



app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","PATCH","DELETE"]      
})

app.register(taskController);
app.register(userController);


const PORT = 3333;
app.listen({ port: PORT }).then(() => {
    console.log(`Backend rodando na porta ${PORT}!`)
})

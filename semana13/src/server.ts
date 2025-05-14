import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { userController } from "./controller/UserController";
import auth_jwt from "./middleware/auth_jwt";
import fastifySwagger from "@fastify/swagger";
import { swaggerConfig } from "./config/swaggerConfig";
import fastifySwaggerUi from "@fastify/swagger-ui";

const app = fastify();



app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
})

app.register(fastifySwagger, swaggerConfig as any);
app.register(fastifySwaggerUi, { routePrefix: '/docs', uiConfig: { docExpansion: 'list' } }),

    app.register(auth_jwt);
app.register(taskController);
app.register(userController);


const PORT = 3333;
app.listen({ port: PORT }).then(() => {
    console.log(`Backend rodando na porta ${PORT}!`)
})

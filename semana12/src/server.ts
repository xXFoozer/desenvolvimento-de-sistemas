import fastify from "fastify";

const app = fastify();

app.get("/hello", (request, response) => {
    console.log(request.method);
    console.log(request.url);
    return response.code(500).send("Errorr")
})


app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!")
})


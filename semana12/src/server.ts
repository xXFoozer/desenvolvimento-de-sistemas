import fastify from "fastify";

const app = fastify();

app.get("/hello", ()=>{
    console.log("Entrou no end point Hello!")
    return "Olá Mundo, Boa noite"
})

app.listen({ port: 3333 }).then(() => {
    console.log('Backend rodando na porta 3333')
})

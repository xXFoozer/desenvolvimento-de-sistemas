export const swaggerConfig = {
    openapi: {
        info:{
            title: "API task TODO LIST",
            description: "API do projeto de tarefas",
            version: "1.0.0"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    exposeRoute: true
}
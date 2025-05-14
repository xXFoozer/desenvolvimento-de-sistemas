import 'fastify'
import { FastifyReply } from 'fastify';

declare module 'fastify'{
    interface FastifyRequest{
        user: {
            id: string;
            name: string;
            email: string;
            birthDate: Date;
            createdAt: Date;
            updatedAt: Date;
        },
        jwtVerify(): Promise<void>
    }

    interface FastifyInstance {
        authenticate(request: FastifyRequest, reply: FastifyReply),
        jwt: {
            sign: FastufyJWT['sign'],
            verify: FastufyJWT['verify'],
            decode: FastufyJWT['decode']
        }
    }


}
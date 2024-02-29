import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
})

try {
    await fastify.listen({ port: process.env.PORT ?? 5000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}
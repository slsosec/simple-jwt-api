import Fastify from "fastify";
import entrypoint from "./source/entrypoint.js";

const fastify = Fastify({
    logger: true
});

await entrypoint(fastify);

try {
    await fastify.listen({ port: process.env.PORT ?? 5000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}
import Fastify from "fastify";
import entrypoint from "./source/entrypoint.js";

const fastify = Fastify({
    logger: true
});

await entrypoint(fastify);
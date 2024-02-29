import controller from "./controllers/controller.js";

const entrypoint = async (application) => {
    await controller(application);

    try {
        await application.listen({ port: process.env.PORT ?? 5000 });
    } catch (error) {
        application.log.error(error);
        process.exit(1);
    }
}

export default entrypoint;
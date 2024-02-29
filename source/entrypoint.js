import controller from "./controllers/controller.js";

const entrypoint = async (application) => {
    await controller(application);
}

export default entrypoint;
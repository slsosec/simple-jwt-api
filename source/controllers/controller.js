import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const controller = async (application) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const files = fs.readdirSync(__dirname).filter(file => file !== "controller.js");

    for(const file of files) {
        const filePath = path.join(__dirname, file);
        const module = await import("file://" + filePath);
        if(typeof module.default === "function") module.default(application);
    }
}

export default controller;
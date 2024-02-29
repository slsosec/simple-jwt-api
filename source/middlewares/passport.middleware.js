import jwt from "jsonwebtoken";

const key = process.env.JWT_SECRET_KEY ?? "slsosec";

export default class PassportMiddleware {
    static generate = () => {
        const token = jwt.sign({ id: 1 }, key, { expiresIn: '1d' });
        return token;
    }

    static validate = (request, response, next) => {
        try {
            const token = request?.headers?.authorization?.replace("Bearer ", "");
            const authorized = jwt.verify(token, key);
            next();
        } catch (error) {
            response.status(401).send({ autorized: false });
        }
    }
}
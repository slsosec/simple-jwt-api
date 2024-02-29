import PassportMiddleware from "../middlewares/passport.middleware.js"

export default class PassportService {
    static Get = (request, response) => {
        response.send({ success: true })
    }

    static GetToken = (request, response) => {
        const token = PassportMiddleware.generate();
        response.send({ success: true, token, expiresIn: "1 day. Keep calm!" });
    }
}
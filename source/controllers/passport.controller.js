import PassportService from "../services/passport.service.js"
import PassportMiddleware from "../middlewares/passport.middleware.js"

export default (application) => {
    application.get("/api/v1/passport", { preHandler: PassportMiddleware.validate }, PassportService.Get)
    application.get("/api/v1/passport/token", PassportService.GetToken)
}
import PassportService from "../services/passport.service.js"

export default (application) => {
    application.get("/", PassportService.Get)
}
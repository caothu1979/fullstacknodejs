import { render } from "ejs";
import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/get-users", homeController.displayAllUsers);  
    router.get("/hoidanit", (req, res) => {
    return res.send("Hello word with hoidanit");
    });
    return app.use("/", router);
}
module.exports = initWebRouters;

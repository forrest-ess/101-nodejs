import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute  = (app) =>{
    router.get("/", homeController.getHomepage);
      
    router.get("/about", (req, res) => {
        res.send(`I'm Forrest`);
    });

    return app.use('/', router)
}

//module.export = initWebRoute;
export default initWebRoute;
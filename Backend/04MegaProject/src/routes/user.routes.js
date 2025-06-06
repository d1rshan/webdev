import { registerUser } from "../controllers/user.controllers.js";
import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()


// if we get post request for /register route then we serve registerUser controller 
router.route("/register").post(
    upload.fields([
        { 
            name: "avatar",
            maxCount: 1
        }, {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

export {router}

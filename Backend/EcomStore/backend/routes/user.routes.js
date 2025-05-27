import express from "express";
import { createUser,loginUser, logoutCurrentUser,getAllUsers, getCurrentUserProfile,updateCurrentUserProfile, deleteUserById, getUserById, updateUserById} from "../controllers/user.controllers.js";
import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";


const router = express.Router()

router.route('/')
.post(createUser)
.get(authenticate,authorizeAdmin,getAllUsers) 
// for the get request in '/' route first middlewares - authenticate - authorizeAdmin then the controller getAllUsers

router.route('/auth')
.post(loginUser)

router.route("/logout")
.post(logoutCurrentUser)

router.route('/profile')
.get(authenticate,getCurrentUserProfile).put(authenticate,updateCurrentUserProfile)

// ADMIN ROUTES 👇
router.route("/:id")
.delete(authenticate, authorizeAdmin, deleteUserById)
.get(authenticate, authorizeAdmin, getUserById)
.put(authenticate, authorizeAdmin, updateUserById);


export default router
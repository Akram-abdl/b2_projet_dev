import express from "express";

import { signin, signup, patchUser, deleteUser } from "../controllers/users";
import auth from "../middleware/auth";


const router = express.Router();

// All routes in here are starting with /users

router.post("/signin", signin);
router.post("/signup", signup);

router.patch("/", auth, patchUser);
router.delete("/", auth, deleteUser);

export default router;

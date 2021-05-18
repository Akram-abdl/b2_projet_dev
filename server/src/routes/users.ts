import express from "express";

import { signin, signup, patchUser, deleteUser } from "../controllers/users";

const router = express.Router();

// All routes in here are starting with /users

router.post("/signin", signin);
router.post("/signup", signup);

router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

export default router;

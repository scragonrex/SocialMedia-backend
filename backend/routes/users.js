import express from "express";
import {
    getUser,
    getUsersFriends,
    addRemoveFriends
} from "../controller/users.js";
import {verifyToken} from "../middleware/auth.js";
const router = express.Router();

//Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUsersFriends);

//Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

export default router;
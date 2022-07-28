import express from "express";
import { addUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userControllers.js";
const router = express.Router();




//get all users
router.get("/", getUsers);

//get user by id
router.get("/:id", getUserById);

//add user
router.post("/", addUser);

//update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);




export default router;








import express from "express"
import { getUsers, getUserById, createUser } from "../controllers/users.js"

const router = express.Router()

// Get all users
router.get("/", getUsers)

// Get user by ID
router.get("/:id", getUserById)

// Create new user
router.post("/", createUser)

export default router

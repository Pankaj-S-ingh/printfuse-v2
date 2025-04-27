import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { dirname } from "path"
import usersRoutes from "./routes/users.js"

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the backend API!" })
})


app.use("/api/users", usersRoutes)


app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong!",error : err.toString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

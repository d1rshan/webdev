import dotenv from "dotenv"
import {app} from "./app.js"
import { connectDB } from "./db/index.js"

dotenv.config()
const PORT = process.env.PORT || 7001



connectDB()
.then(() => {
    app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}...`)
    })
})

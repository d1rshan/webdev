import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use("/api/notes",notesRoutes);

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log(`Server listening on PORT: ${PORT}`);
    })
})

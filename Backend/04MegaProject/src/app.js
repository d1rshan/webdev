import express from "express"
import cors from "cors"
const app = express()


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

// common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// import routes
import  {router as healthcheckRouter} from "./routes/healthcheck.routes.js"

// routes
// every model has a route ig, then in a route we define multiple sub routes 
// and assign them their respective controllers to send back response
// also routes are used to organize stuff cause we mostly use multiple requests (get, post, put, delete) for a common api url and it ensures we dont need to mention the common url for all the requests (ie routes)
app.use("/api/v1/healthcheck",healthcheckRouter)

export {app} 
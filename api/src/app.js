import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))



app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: true, limit: "50mb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.route.js"
import projectRouter from  "./routes/project.route.js"
import contactRouter from "./routes/contact.route.js"

app.use("/api/users", userRouter);
app.use("/api/project", projectRouter);
app.use("/api/contact", contactRouter);

export { app }


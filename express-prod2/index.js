import express from "express"
import morgan from "morgan"
import studentRoutes from "./src/controllers/routes/StudentRoutes.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(studentRoutes)

app.listen(3000,()=>{
    console.log(`Server is listening on 3000`)
})




import router from "./routes/message"
import express from "express"

const server = express()
const port = 3001

server.get("/", (req, res) => {
    res.send("Hello!")
})

server.use(router)

server.listen(port, async () => {
    console.log("Server is running... http://localhost:3001")
})
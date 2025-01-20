import express from "express"

const router = express.Router();

router.get("/message/:message", (req, res) => {
    const message = req.params["message"]
    res.send("Hey, I got your message: " + message + ".")
})

export default router
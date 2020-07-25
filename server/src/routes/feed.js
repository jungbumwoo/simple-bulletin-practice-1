import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    return res.send("feed page");
});

export default router;
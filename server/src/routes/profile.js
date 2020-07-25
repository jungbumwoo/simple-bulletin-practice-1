import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    return res.send("profile page");
});

export default router;
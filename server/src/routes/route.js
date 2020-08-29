import express from "express";
import profile from "./profile";
import feed from "./feed";
import auth from "./auth";
import boardlist from "./boardlist";
import comment from "./comment";

const router = express.Router();

router.use("/profile", profile);
router.use("/feed", feed);
router.use("/auth", auth);
router.use("/boardlist", boardlist);
router.use("/comment", comment);

export default router;
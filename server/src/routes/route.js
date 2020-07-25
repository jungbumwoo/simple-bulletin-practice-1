import express from "express";
import home from "./home";
import profile from "./profile";
import feed from "./feed";
import auth from "./auth";

const router = express.Router();

router.use("/", home);
router.use("/profile", profile);
router.use("/feed", feed);
router.use("/auth", auth);

export default router;
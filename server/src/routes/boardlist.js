import express from "express";
import mysql from "../db/mysql";
const router = express.Router();

router.get("/", (req, res) => {
    if (!req.session.token) {
        return res.json({
            ok: false,
            status: 400,
            error: "unauthorized"
        });
    }
    const sql = `select b.id, b.title, b.content, u.username FROM board b INNER JOIN user u ON b.writer = u.id LIMIT 100`;

    mysql.query(sql, (err, results, fields) => {
        if(err) {
            console.log(err);
            return res.json({
                ok: false,
                status: 400,
                error: "db error"
            });
        }
        const boardlist = results;
        return res.json({
            boardlist
        });
    });
});

export default router;
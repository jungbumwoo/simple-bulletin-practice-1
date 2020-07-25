import express from "express";
import mysql from "../../build/db/mysql";
const router = express.Router();

router.get("/new", (req, res) => {
    console.log(`req is ${req.body}`);
    const username = req.body.username;
    const password = req.body.password;
    var sql = "SELECT * FROM user WHERE username=?";
    const post = [username];
    mysql.query(sql, post, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                error: "db error",
                status: 400
            });
        } else {
            if (results.length === 0) {
                let sql = "INSERT INTO user (username, password) VALUES(?, ?)";
                let post = [username, password];
                mysql.query(sql, post, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            ok: false,
                            error: "2 db error",
                            status: 400
                        });
                    } else {
                        return res.json({
                            ok: true,
                            status: 200,
                            error: null,
                        })
                    }
                })
            } else {
                return res.json({
                    ok: false,
                    error: "existing username",
                    status: 400
                })
            }
        }
    });
});

export default router;
import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
    console.log("This is server");
    res.send("Hello from server");
});

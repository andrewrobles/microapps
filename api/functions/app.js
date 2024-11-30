//app.js
const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});

app.use(cors());
app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
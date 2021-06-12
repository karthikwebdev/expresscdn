const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express()
app.use(cors())
app.use(express.static("files"))

app.listen(process.env.PORT,console.log("Server started"))
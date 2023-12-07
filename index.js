const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/post.routes");
const cors = require("cors")
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use("/contacts" , userRouter)

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("server is running at port 8080")
    } catch (error) {
        console.log(error)
    }
})
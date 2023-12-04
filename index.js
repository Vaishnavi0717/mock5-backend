const express=require("express");
const cors=require("cors");
// require("dotenv").config()
const {connection}= require("./db");
const {contactRouter}= require("./routes/post.routes");



const app=express();

app.use(cors());

app.use("/contacts", contactRouter)


app.listen(8080, async()=>{
    try {
        await connection;
        console.log(`server is running on port 8080`)
    } catch (error) {
        console.log(error)
    }
})
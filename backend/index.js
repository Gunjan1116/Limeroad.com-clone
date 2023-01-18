const express=require("express");
const cors=require("cors");
const { connection } = require("./config/db");
const {userRoute}=require("./routes/user.route")
require("dotenv").config();

const app=express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.json(`Welcome to home page of Light Fashion`)
})
app.use("/users",userRoute);

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`Connected to DB`);
    } catch (error) {
        console.log(`Not able to connect to DB`);
        console.log(error.message);
    }
    console.log(`server is running at port ${process.env.port}`)
})
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
    path:".env"
})

databaseConnection();

const app = express();
// const PORT = 8000;
app.use(express.urlencoded({extened:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
     origin:"http://localhost:3000",
     Credentials:true
}
app.use(cors(corsOptions));

// app.get("/",(req,res)=>{
//     res.status(200).json({
//         message:"Hello i am coming from beackend",
//         success:true
//     })
// })

//api
app.use("/api/v1/user",userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
});


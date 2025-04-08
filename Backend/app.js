import express from "express";
import { config } from "dotenv";
import cors from "cors";
import {sendEmail} from './utils/sendEmail.js'
import instance from "./utils/razorpayInstance.js";

const app = express();
const router = express.Router();

//to access config.env file
config({path: "./config.env"}); 
// console.log(process.env.PORT);

//middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL],   //for connecting with frontend
    methods:["POST"],
    credentials: true
}))

app.use(express.json());           //to parse data in json format
app.use(express.urlencoded({extended: true}));             //to verify the format of data 

router.post("/send/mail",async(req,res,next)=>{
    const{name,email,message} = req.body;
    if(!name || !email || !message){
        return next(res.status(400).json({
            success:false,
            message:"Please provide all details"
        }))
    }
    try{
        await sendEmail({
            email: "ironlifefitness24@gmail.com",
            subject:"Gym Website contact",
            message,
            userEmail: email
        })
        res.status(200).json({
            success:true,
            message:"Message sent successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
})

router.post("/create-order",async(req,res) => {
    const {amount} = req.body;

    const options = {
        amount : amount * 100,   //paise
        currency : "INR",
        receipt : `receipt_order_${Math.floor(Math.random() * 10000)}`
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json({
            success:true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to create Razorpay order",
            error : error.message
        });
    }
});

app.use(router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at port ${process.env.PORT}`)
})
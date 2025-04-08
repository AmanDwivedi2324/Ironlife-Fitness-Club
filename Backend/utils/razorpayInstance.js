import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" }); // Add path here again if needed

// console.log("RAZORPAY KEY ID: ", process.env.RAZORPAY_KEY_ID); // 👈 debug log

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default instance;

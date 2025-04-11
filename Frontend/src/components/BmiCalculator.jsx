import React from 'react'
import { useState } from "react";
import BMIimage from '../assets/other/BmiImage.jpg'
import { toast } from 'react-toastify';

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const submitHandler =(e) => {
        e.preventDefault();
        if(!height || !weight || !gender){
          toast.error("Please enter valid height, weight and gender.");
          return;
        }
        const heightInMeters = height / 100;
        const bmiVal = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiVal);

        if(bmiVal < 18.5){
          toast.warning("You are underweight. Consider seeking advice from a healthcare provider.")
        }
        else if(bmiVal >= 18.5 && bmiVal < 24.9){
          toast.success("You have normal weight. Keep maintaining a healthy lifestyle.")
        }
        else if(bmiVal >= 24.9 && bmiVal < 29.9){
          toast.warning("You are overweight. Consider seeking advice from a healthcare provider.")
        }
        else{
          toast.error("Your current BMI suggests a serious health risk. You're encouraged to seek medical advice.")
        }
        setHeight("");
        setWeight("");
        setGender("");
  }
  return (
    <div className='mb-15'>
        <h2 className='text-center py-10 md:py-20 font-bold text-4xl text-white tracking-wider mb-5'>
            BMI CALCULATOR
        </h2>
        <div className='flex flex-col md:flex-row h-auto px-10 md:px-30 md:gap-15'>
            <div className='w-full md:w-1/2'>
            <form onSubmit={(e)=>submitHandler(e)} className="space-y-4">
                <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium mb-1">Height(cm)</label>
                        <input value={height} onChange={(e)=>setHeight(e.target.value)}  required type="number" id="height" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca] w-full" placeholder="Height in cm"/>
                </div>
                <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium mb-1">Weight(kg)</label>
                        <input value={weight} onChange={(e)=>setWeight(e.target.value)} required type="number" id="weight" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca]" placeholder="Weight in kg"/>
                </div>
                <div className="flex flex-col">
                        <label htmlFor="gender" className="font-medium mb-1">Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender"
                        className="p-2 border rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#4d8cca] appearance-none"
                       >
                          <option value="" disabled hidden>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                </div>
                <button type="submit" className=" mb-10 md:mb-15 px-4 md:px-6 py-2 md:py-3 text-2xl font-semibold w-full p-2 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white rounded-md transition duration-200 cursor-pointer"> Calculate BMI</button>
            </form>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={BMIimage} alt="BMIcalculator" />
            </div>
        </div>
    </div>
  )
}

export default BmiCalculator
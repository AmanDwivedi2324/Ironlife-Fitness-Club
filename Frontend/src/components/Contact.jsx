import React from 'react'
import { useState } from "react";
import contactImage from '../assets/other/ContactImage.jpg'
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);


      const submitHandler =async(e) => {
      e.preventDefault();
      setLoading(true);

      try {
          const {data} = await axios.post("https://ironlife-fitness-club.onrender.com",
            {name,email,message},
            {withCredentials:true, headers: {"Content-Type" : "application/json"}}
          );
          setName("");
          setEmail("");
          setmessage("");
          toast.success(data.message);
          setLoading(false);
      } catch (error) {
          setLoading(false);
          toast.error(error.response.data.message);
      }
  }
  return (
    <div className='bg-cover bg-center' style={{backgroundImage:`url(${contactImage})`}}>
            <h2 className='text-center py-20 font-bold text-4xl text-white tracking-wider mb-'>
                CONTACT US
            </h2>
            <div className='flex flex-col-reverse md:flex-row h-auto px-30 gap-15'>
                <div className='w-full md:w-1/2'>
                      <img src={contactImage} alt="contactImage" />
                </div>
                <div className='w-full md:w-1/2'>
                <form onSubmit={(e)=>submitHandler(e)} className="space-y-4">
                    <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium mb-1">Name*</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)}  required type="text" id="name" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca] w-full" placeholder="Aman Dwivedi"/>
                    </div>
                    <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium mb-1">Email*</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" id="email" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca]" placeholder="name@example.com"/>
                    </div>
                    <div className="flex flex-col">
                            <label htmlFor="textarea" className='font-medium'>Message</label>
                           <textarea value={message} onChange={(e)=>setmessage(e.target.value)} id="textarea" rows="3" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca]"></textarea>
                    </div>
                   <button type="submit" disabled={loading} className=" mb-10 md:mb-15 px-4 md:px-6 py-2 md:py-3 text-2xl font-semibold w-full p-2 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white rounded-md transition duration-200 cursor-pointer">{loading && <ClipLoader size={20} color="white" />} SEND MESSAGE</button>
                </form>
                </div>
            </div>
    </div>
  )
}

export default Contact


    // <div style={{backgroundImage:`url(${contactImage})`}} className='bg-cover bg-left h-auto py-30'>
    //   <h2 className='text-center font-bold text-4xl text-white tracking-wider mb-5'>
    //         CONTACT US
    //    </h2>
    //   <div className="max-w-lg mx-auto rounded-lg items-center">
    //     <form onSubmit={(e)=>submitHandler(e)} className="space-y-4">
    //         <div className="flex flex-col">
    //                 <label htmlFor="email" className="font-medium">Name*</label>
    //                 <input value={name} onChange={(e)=>setName(e.target.value)}  required type="text" id="text" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca] w-full" placeholder="Aman Dwivedi"/>
    //         </div>
    //         <div className="flex flex-col">
    //                 <label htmlFor="email" className="font-medium">Email*</label>
    //                 <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" id="email" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca]" placeholder="name@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
    //         </div>
    //         <div className="flex flex-col">
    //                 <label htmlFor="textarea" className="font-medium">Message</label>
    //                 <textarea value={message} onChange={(e)=>setmessage(e.target.value)} id="textarea" rows="3" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8cca]"></textarea>
    //         </div>
    //         <button type="submit" disabled={loading} className=" mb-10 md:mb-15 px-4 md:px-6 py-2 md:py-3 text-2xl font-semibold w-full p-2 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white rounded-md transition duration-200 cursor-pointer">{loading && <ClipLoader size={20} color="white" />} SEND MESSAGE</button>
    //     </form>
    //   </div>
    // </div>






    // http://localhost:4000/send/mail

    // https://ironlife-fitness-club.onrender.com
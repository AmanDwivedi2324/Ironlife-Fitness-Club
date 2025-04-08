import React from 'react'
import PricingImage from '../assets/other/PricingImage.jpg'

const PricingBox = (props) => {

  const handleJoinNow = async () => {
    const amount = 1; // You can make it dynamic too

    // 1. Send amount to backend to create order
    const response = await fetch("http://localhost:4000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount })
    });

    const data = await response.json();

    // 2. Configure Razorpay checkout options
    const options = {
      key: "rzp_test_kIG5vDmVUi31fy", // ✅ Use your Razorpay test key
      amount: data.order.amount,
      currency: "INR",
      name: "IronLife Gym",
      description: "Membership Payment",
      order_id: data.order.id,
      handler: function (response) {
          alert(`✅ Payment Successful!
          Payment ID: ${response.razorpay_payment_id}
          Order ID: ${response.razorpay_order_id}`);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#F37254"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };


  return (
    <div className='pricing px-6 py-8 md:px-10 md:py-10 rounded-sm w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto' >
        <div>
            <h2 className='text-2xl md:text-4xl text-[#4d8cca] tracking-wider font-bold'>{props.name}</h2>
            <h2 className='mt-2 text-2xl md:text-3xl text-white tracking-wide font-semibold'>{props.price}</h2>
            <h4 className='mt-2 text-2xl md:text-xl text-white font-normal tracking-normal rounded '>{props.tenure}</h4>
        </div>
        <div>
            <div className='mt-6 md:mt-10 space-y-2'>
                <p className='text-base md:text-lg font-medium'>✅Equipment</p>
                <p className='text-base md:text-lg font-medium'>✅All Day Free Training</p>
                <p className='text-base md:text-lg font-medium'>✅Free Restroom</p>
                <p className='text-base md:text-lg font-medium'>✅24/7 Skilled Support</p>
                <p className='text-base md:text-lg font-medium'>✅20 Days Freezing Option</p>
            </div>
            <button onClick={handleJoinNow} className='mt-6 md:mt-10 mb-10 md:mb-15 px-4 md:px-6 py-2 md:py-3 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white font-semibold rounded-sm transition duration-200 cursor-pointer'>Join Now</button>
        </div>
    </div>
  )
}

export default PricingBox
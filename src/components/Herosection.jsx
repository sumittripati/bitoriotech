import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { MdSlowMotionVideo } from "react-icons/md";



const Herosection = () => {


  return (
    <div className="relative w-full h-[675px] bg-[url('/hero-Image.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[rgba(0, 0, 0, 0.5)] bg-opacity-50">   
      <div className="relative z-10 flex items-center justify-center h-full flex-col max-w-[896] px-4 gap-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#242524] text-center">Innovating the Future with <br /> Advanced Technology <br /> Solutions</h1>
          <p className='text-[#171A1F] text-center'>BitorioTech empowers businesses with cutting-edge AI, cloud, and From Concept to Launch: <br /> Your Blockchain Projects’ Journey Starts Here</p>
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <button className='text-[#FFFFFF] bg-[#0093E5] px-4 py-1 rounded-md flex gap-1'>Request a Demo <GoArrowRight className='size-5 pt-1.5'/></button>
            <button className='text-[#242524] bg-[#FFFFFF] px-4 py-1 rounded-md flex gap-1'><MdSlowMotionVideo className='size-5 pt-1.5'/>Watch Into Video</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection

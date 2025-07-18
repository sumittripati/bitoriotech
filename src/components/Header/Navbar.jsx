import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-8 py-2 bg-[#FFFFFF]'>
        <div className='flex justify-between w-125 items-center'>
            <div><img src="./logo-Image.png" alt="logo"/></div>
            <div className=' '>
                <ul className='flex justify-between items-center gap-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/project">Project</Link></li>
                </ul>
            </div>
        </div>
        <div><button className='flex bg-[#0093E5] py-2 px-4 rounded-md'><GoArrowRight className='size-5 pt-1'/><div>Request a Demo</div></button></div>
      </div>
    </div>
  )
}

export default Navbar

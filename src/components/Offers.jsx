import React from 'react'
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

 const offers = [
  "AI & Machine Learning",
  "Cloud Computing Solutions",
  "Cybersecurity Consulting",
  "Data Analytics & Visualization",
  "Managed IT Services",
  "Custom Software Development"
];

const Offers = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='mt-14'>
      <section id='about' className="max-w-7xl mx-auto p-3">
      <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
      <p className="text-gray-600 mb-6 border-2 w-[330px] sm:w-[400px]">At BitorioTech, we provide a comprehensive suite of technology services designed to help your business thrive in the digital age. Our solutions are tailored to your specific needs.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div>
          {offers.map((item, index) => (
            <div key={index} onClick={() => toggleItem(index)} className="border-b border-gray-200 py-3 cursor-pointer hover:bg-gray-100 transition duration-200">
              <span className="text-lg font-medium flex gap-1 items-center">{item}<span>{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></span>
              {activeIndex === index && (
                <p className="text-sm text-gray-600 mt-2">Detailed description of "{item}" goes here.</p>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 relative bottom-33">
          <img src="./offer-one.png" alt="Tech 1" className="w-full h-50 object-cover rounded"/>
          <img src="./offer-two.png" alt="Tech 2" className="w-full h-50 object-cover rounded"/>
          <img src="./offer-three.png" alt="Cybersecurity" className="w-full h-50 object-cover rounded"/>
          <img src="./offer-four.png" alt="Coding" className="w-full h-50 object-cover rounded"/>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Offers



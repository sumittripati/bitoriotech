import React from "react";
import { CheckCircle } from "lucide-react";
import { GoArrowRight } from "react-icons/go";

const points = [
  "Strategic partnerships for integrated solutions",
  "Customer-centric approach and tailored strategies",
  "Commitment to continuous innovation and R&D",
  "Expert team with proven track record",
  "Sustainable and scalable technology implementations"
];

const Innovation = () => {
  return (
    <div>
      <section className="bg-white px-6 md:px-12 max-w-8xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src="./driving.png" alt="Team Innovation" className="w-full rounded shadow-lg max-h-[400px] mb-3"/>
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-800">Driving Innovation, Delivering Excellence</h2>
          <p className="text-gray-600 mb-6 w-full">BitorioTech is a leading technology company dedicated to providing innovative solutions that solve complex business challenges. Our team of experts combines deep industry knowledge with cutting-edge technology to deliver measurable results.</p>
          <ul className="space-y-3 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 flex gap-2 items-center">Learn More About Us <GoArrowRight /></button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Innovation

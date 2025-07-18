import React from 'react'
import { GoArrowRight } from "react-icons/go";

const projects = [
  {
    title: "Enterprise AI Integration",
    category: "Artificial Intelligence",
    image: "./project-one.png"
  },
  {
    title: "Secure Cloud Migration",
    category: "Cloud Computing",
    image: "./project-two.png"
  },
  {
    title: "Threat Detection Platform",
    category: "Cybersecurity",
    image: "./project-three.png"
  },
  {
    title: "Real-time Sales Dashboard",
    category: "Data Analytics",
    image: "./project-four.png"
  },
  {
    title: "IoT Device Management",
    category: "Managed IT",
    image: "./project-5.png"
  },
  {
    title: "E-commerce Platform Rearchitect",
    category: "Software Development",
    image: "./project-6.png"
  }
];

const Projects = () => {
  return (
    <div>
      <section className="bg-[#F2F9FD] py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Recent Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore some of our impactful projects where we’ve leveraged technology to create
          significant value for our clients across various industries.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"><img src={project.image} alt={project.title} className="w-full h-40 object-cover"/>
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center mx-auto">
            <button className="px-6 py-2 bg-[#FFFFFF] border border-[#EBEBEA] text-[#242524] rounded transition duration-200 flex items-center mx-auto">View All Projects <GoArrowRight /></button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects














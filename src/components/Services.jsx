import React from "react";
import { Brain, Code2, Cloud, ShieldCheck, BarChart2, Palette} from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    icon: <Brain className="text-blue-500 w-8 h-8" />,
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation."
  },
  {
    title: "App Development",
    icon: <Code2 className="text-blue-500 w-8 h-8" />,
    description:
      "Custom web and mobile application development tailored to your unique business requirements and user experience."
  },
  {
    title: "Cloud Solutions",
    icon: <Cloud className="text-blue-500 w-8 h-8" />,
    description:
      "Scalable and secure cloud infrastructure design, migration, and management for optimal performance and flexibility."
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="text-blue-500 w-8 h-8" />,
    description:
      "Comprehensive security strategies and implementation to protect your data and infrastructure from evolving threats."
  },
  {
    title: "Data Analytics",
    icon: <BarChart2 className="text-blue-500 w-8 h-8" />,
    description:
      "Transform raw data into actionable insights with our advanced data analytics and business intelligence services."
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="text-blue-500 w-8 h-8" />,
    description:
      "Crafting intuitive, engaging, and visually stunning user interfaces for exceptional digital experiences."
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Core Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">From intelligent automation to secure digital experiences, we cover all your technological needs.</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 bo">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition bg-white h-[220px]">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

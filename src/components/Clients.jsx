import React from "react";

const testimonials = [
  {
    text: "BitorioTech transformed our outdated systems into a streamlined, AI-powered platform. Their team's expertise and dedication were exceptional.",
    name: "Jane Doe",
    title: "CEO, Innovate Corp.",
    image: "./client-one.png",
  },
  {
    text: "The mobile application developed by BitorioTech exceeded all our expectations. It's intuitive, robust, and has significantly boosted our user engagement.",
    name: "John Smith",
    title: "Product Manager, Global Ventures",
    image: "./client-two.png",
  },
  {
    text: "Their cloud migration service was seamless. We experienced zero downtime, and our infrastructure is now more secure and efficient than ever before.",
    name: "Emily White",
    title: "CTO, Tech Solutions Inc.",
    image: "./client-three.png",
  },
  {
    text: "BitorioTech's cybersecurity audit identified critical vulnerabilities, and their swift implementation of solutions saved us from potential threats. Highly recommend!",
    name: "Michael Brown",
    title: "Security Lead, SecureNet Corp.",
    image: "./client-four.png",
  }
];

const Clients = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10">
          Hear directly from the businesses we’ve helped transform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 text-left hover:shadow-md transition">
              <p className="text-sm text-gray-700 italic mb-4 h-[100px]">“{testimonial.text}”</p>
              <div className="flex items-center gap-3 border-t-1 border-gray-200 pt-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover"/>
                    <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.title}</p>
                    </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

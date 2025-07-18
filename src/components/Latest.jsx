import React from 'react';

const blogs = [
  {
    title: 'The Future of AI: Beyond Automation',
    date: 'October 26, 2023',
    readTime: '8 min read',
    summary: 'Explore how artificial intelligence is evolving from simple automation to complex decision-making and creative problem-solving across industries.',
    image: './blog-one.png',
  },
  {
    title: 'Securing Your Cloud: Best Practices for Data Protection',
    date: 'October 19, 2023',
    readTime: '6 min read',
    summary: 'Discover essential strategies and best practices for fortifying your cloud infrastructure against modern cyber threats and ensuring data integrity.',
    image: './blog-two.png',
  },
  {
    title: 'DevOps: Bridging the Gap Between Development and Operations',
    date: 'October 12, 2023',
    readTime: '7 min read',
    summary: 'Understand the principles of DevOps and how it can revolutionize your software development lifecycle for faster, more reliable deployments.',
    image: './blog-3.png',
  },
];

const Latest = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Latest Insights from Our Blog</h2>
      <p className="text-center text-gray-600 mb-12">Stay informed with our expert analysis on technology trends, innovations, and industry news.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b, i) => (<div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden ">
            <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 h-[70px]">{b.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{b.summary}</p>
              <div className="flex justify-between text-xs text-gray-500 mb-3 border-t-1 border-gray-200 pt-2"><span>{b.date}</span><span>{b.readTime}</span></div>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;



import React from "react";
import { Mail } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141518] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-bold mb-2">BitorioTech</h2>
        <p className="text-sm mb-4">Subscribe to our newsletter</p>
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center bg-[#1E1F24] rounded-l-full px-3 py-[6px] border-2 border-gray-300">
            <Mail className="text-gray-400 w-4 h-4 mr-2" /><input type="email" placeholder="Input your email" className="bg-transparent outline-none text-white placeholder:text-gray-400"/>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full">
            Subscribe
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6 text-gray-300">
          <a href="#">Pricing</a>
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">Help Center</a>
          <a href="#">Contact us</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
        </div>
        <div className="border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <select className="bg-[#1E1F24] px-2 py-1 rounded border border-gray-600 text-xs">
              <option>English</option>
            </select>
          </div>
          <div className="mb-4 sm:mb-0">
            © 2024 Brand, Inc. • <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Sitemap</a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaTwitter className="cursor-pointer hover:text-blue-400 text-[#4CD2FF]" />
            <FaFacebook className="cursor-pointer hover:text-blue-500 text-[#4C8AFF]" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600 text-[#5378D0]" />
            <FaYoutube className="cursor-pointer hover:text-red-500 text-[#FF4C4C]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Sugar Crash</h3>
            <p className="text-sm">Revolutionizing diabetes management with natural solutions.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#product" className="hover:underline">Product Info</a></li>
              <li><a href="#benefits" className="hover:underline">Benefits</a></li>
              <li><a href="#order" className="hover:underline">Order Now</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@sugarcrash.com</p>
            <p className="text-sm">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Sugar Crash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
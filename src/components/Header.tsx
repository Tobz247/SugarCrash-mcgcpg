import React from 'react';
import { Droplet } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Droplet className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Sugar Crash</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#product" className="hover:underline">Product</a></li>
            <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            <li><a href="#order" className="hover:underline">Order Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
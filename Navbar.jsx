import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login functionality
    console.log('Login clicked');
  };

  const handleRegister = () => {
    // Mock register functionality
    console.log('Register clicked');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PKL System</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogin}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Login
            </button>
            <Button
              onClick={handleRegister}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

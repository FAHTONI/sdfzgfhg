import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleGetStarted = () => {
    // Mock functionality
    console.log('Mulai Sekarang clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Sistem Pendaftaran PKL</span>
          <br />
          <span className="text-teal-500">Modern & Mudah</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Platform digital untuk mempermudah pendaftaran dan pengelolaan Praktik
          <br className="hidden sm:block" />
          Kerja Lapangan (PKL). Daftar sekarang dan mulai perjalanan karirmu!
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleGetStarted}
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
        >
          Mulai Sekarang
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'; // Make sure this is imported

import img1 from '../assets/Hero/hero1.jpg';
import img2 from '../assets/Hero/hero2.jpg';
import img3 from '../assets/Hero/hero3.jpg';
import img4 from '../assets/Hero/hero4.jpg';
import toplac_image from '../assets/Hero/toplac.jpg';
import ink_image from '../assets/Hero/InkPaint.jpeg';
import industrila_image from '../assets/Hero/industrailPaint.jpeg';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-50 to-pink-50 px-4 py-28   lg:py-28 overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
      <img
        src="https://t3.ftcdn.net/jpg/08/55/97/54/360_F_855975460_3tWtkutUoeGsEMTQwkaB8tfyxtQxSNHt.jpg"
        alt="Background Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/30"></div>
    </div> */}

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-black px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-up" data-aos-delay="200">
              <Sparkles className="w-4 h-4" />
              Premium Art-Grade Paints
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Picasso Paint
                <br />
                <span className="text-gray-900">Vibrant Shades &</span>
                <br />
                <span className="relative">Timeless Quality You Trust</span>
              </h1>
            </div>

            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed max-w-lg" data-aos="fade-up" data-aos-delay="600">
              Discover a bold spectrum of colors designed for professionals and creators. Picasso Paint delivers
              eco-friendly, richly pigmented solutions for every artistic surface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="800">
              <Link to="/AllItems" className="bg-[#BB2429] hover:bg-[#ff6369] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Shop Premium Colors
                <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          </div>

          {/* Right Images */}
          <div className="order-2 lg:order-2" data-aos="fade-left" data-aos-delay="400">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">

              {/* Image 1 - Decorative Paints */}
              <Link to="/AllItems" className="relative group overflow-hidden rounded-2xl block">
                <img
                  src={img3}
                  alt="Decorative Paints"
                  className="w-full h-48 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-gray-800 shadow group-hover:scale-105 transition duration-300">
                  Decorative Paints
                </div>
              </Link>

              {/* Image 2 - Toplac Paints */}
              <Link to="/AllItems" className="relative group overflow-hidden rounded-2xl block">
                <img
                  src={toplac_image}
                  alt="Toplac Paints"
                  className="w-full h-48 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-gray-800 shadow group-hover:scale-105 transition duration-300">
                  Toplac Paints
                </div>
              </Link>

              {/* Image 3 - Ink Paints */}
              <Link to="/AllItems" className="relative group overflow-hidden rounded-2xl block">
                <img
                  src={ink_image}
                  alt="Ink Paints"
                  className="w-full h-48 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-gray-800 shadow group-hover:scale-105 transition duration-300">
                  Ink Paints
                </div>
              </Link>

              {/* Image 4 - Industrial Paints */}
              <Link to="/AllItems" className="relative group overflow-hidden rounded-2xl block">
                <img
                  src={industrila_image}
                  alt="Industrial Paints"
                  className="w-full h-48 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-xs sm:text-sm font-bold text-gray-800 shadow group-hover:scale-105 transition duration-300">
                  Industrial Paints
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

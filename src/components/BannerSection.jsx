import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import Evernew from '../assets/Evernew Gallon/Emulsion.png';
import Kent from '../assets/Kent Gallon/Gloss_Enamel.png';

import { Link } from 'react-router-dom'; // corrected import

const BannerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full px-4 py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

        {/* Evernew Section */}
        <div
          className="flex-1 bg-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col justify-between"
          data-aos="fade-right"
        >
          <div className="relative w-full h-48 md:h-60 overflow-hidden">
            <img
              src={banner3}
              alt="Evernew Banner"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between p-4 md:p-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Picasso Paints Evernew</h3>
              <p className="text-sm text-gray-600 mb-3">
                Premium acrylic paint with lasting vibrant color and strong durability.
              </p>
              <Link
                to="/AllColors?category=EVERNEW"
                className="inline-block bg-red-800 hover:bg-red-500 text-white text-xs px-4 py-2 rounded-full transition"
              >
                View Products
              </Link>
            </div>
            <img
              src={Evernew}
              alt="Evernew Gallon"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>

        {/* Kent Section */}
        <div
          className="flex-1 bg-gray-50  rounded-xl shadow-xl overflow-hidden flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div className="relative w-full h-48 md:h-60 overflow-hidden">
            <img
              src={banner4}
              alt="Kent Banner"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between p-4 md:p-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">  Kent Paints</h3>
              <p className="text-sm text-gray-600 mb-3">
                Oil-based paint with smooth application and professional-grade finish.
              </p>
              <Link
                to="/AllColors?category=KENT"
                className="inline-block bg-red-800 hover:bg-red-500 text-white text-xs px-4 py-2 rounded-full transition"
              >
                View Products
              </Link>
            </div>
            <img
              src={Kent}
              alt="Kent Gallon"
              className="w-20 h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BannerSection;

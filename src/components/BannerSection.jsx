import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner1 from '../assets/banner1.jpg';
import banner4 from '../assets/banner4.jpg';
import { Link } from 'react-router';

const BannerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Banner 1 - Picasso Paint Evernew */}
        <div
          className="flex-1 relative rounded-xl overflow-hidden shadow-xl group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link 
          to="/Allitems" className="block">
            <img
              src={banner1}
              alt="Picasso Paint Evernew"
              className="w-full h-64 md:h-80 object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Picasso Paint - Evernew</h3>
                <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 text-sm md:text-base">
                  Premium quality acrylic paint with exceptional durability and vibrant colors that last for years.
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              New
            </div>
          </Link>
        </div>

        {/* Banner 2 - Picasso Paint Kent */}
        <div
          className="flex-1 relative rounded-xl overflow-hidden shadow-xl group"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
           to="/Allitems" className="block">
            <img
              src={banner4}
              alt="Picasso Paint Kent"
              className="w-full h-64 md:h-80 object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Picasso Paint - Kent</h3>
                <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 text-sm md:text-base">
                  Professional-grade oil-based paint with smooth application and rich pigmentation for artists.
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Best Seller
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
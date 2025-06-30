import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { portfolioData } from "../constant/porftfolio";
import { Link } from 'react-router';

const Portfolio = () => {

  const pathname = window.location.pathname;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4" data-aos="fade-down">
        <div>
          <h2 className="text-2xl font-semibold">Our Portfolio</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-md">
            Discover our vibrant portfolio showcasing a diverse range of residential, commercial, and industrial painting projects. From bold exterior transformations to elegant interior finishes, our work reflects premium quality, creativity, and long-lasting results. Explore how our professional painting services bring color and life to every space.
          </p>
        </div>
        {
          pathname !== "/gallery" && (
            <Link to="/gallery" className="border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition" data-aos="fade-up">
              View All
            </Link>
          )
        }
        {/* <Link to="/gallery" className="border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition" data-aos="fade-up">
          View All
        </Link> */}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`relative group h-64 overflow-hidden rounded-xl shadow-md ${item.span ? 'md:col-span-2' : ''}`}
            data-aos="zoom-in" // animation applied here
            data-aos-delay={index * 100} // staggered delay for nice effect
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
              <button className="mt-2 text-sm underline">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

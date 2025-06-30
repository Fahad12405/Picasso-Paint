import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { colorPalettes } from "../constant/colors.js";

const ColorPalette = () => {
  const [selectedPalette, setSelectedPalette] = useState("Kent Weather Care");
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const paletteNames = Object.keys(colorPalettes);

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-screen-xl mx-auto px-2">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-down">
          Picasso Paints Shades Palette
        </h2>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-8 text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {paletteNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedPalette(name)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${selectedPalette === name
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Color Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {colorPalettes[selectedPalette]?.map((color, index) => (
            <div
              key={`${selectedPalette}-${index}`}
              onClick={() => setSelectedColor(color)}
              className="flex flex-col items-center group cursor-pointer transition-transform transform hover:scale-105 duration-300 p-2 rounded-sm"
            >
              <div
                className="w-full h-14 rounded-sm mb-2 border border-gray-200"
                style={{ backgroundColor: color.color }}
              ></div>
              <p className="text-sm font-medium text-gray-700">
                {color.name}
              </p>
              <p className="text-xs text-gray-500">#{color.code}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedColor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              className="absolute top-1 right-3 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={() => setSelectedColor(null)}
            >
              &times;
            </button>
            <div
              className="w-full h-40 rounded-md mb-6 border"
              style={{ backgroundColor: selectedColor.color }}
            ></div>
            <h3 className="text-lg font-semibold mb-1">
              {selectedColor.name}
            </h3>
            <p className="text-sm text-gray-600">Code: #{selectedColor.code}</p>
            <button
              onClick={() => navigate("/Allitems")}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              View All Items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ColorPalette;

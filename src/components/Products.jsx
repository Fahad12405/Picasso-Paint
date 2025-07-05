import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { products } from '../constant/products';

const ProductSlider = () => {
  const scrollRef = React.useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = window.innerWidth <= 640 ? 180 : 220;
      const scrollTo =
        direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleClick = (name) => {
    navigate(`/product/${name}`);
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
        Our Best Selling Paints Products
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-sm sm:text-base">
        Buy premium quality paint products for your interior and exterior at economical prices. Book your order now!
      </p>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hidden sm:block"
        >
          <FaChevronLeft size={18} />
        </button>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 sm:px-4"
          >
            {loading
              ? Array.from({ length: 10 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[48%] sm:w-[20%] flex-shrink-0 bg-white p-3 rounded-lg animate-pulse shadow"
                  >
                    <div className="w-full h-[200px] sm:h-[260px] bg-gray-300 rounded-md"></div>
                    <div className="h-3 w-2/3 bg-gray-300 rounded mt-2 mx-auto"></div>
                  </div>
                ))
              : products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleClick(product.name)}
                    className="w-[48%] sm:w-[20%] flex-shrink-0 bg-white p-3 rounded-lg transition-all cursor-pointer transform hover:scale-105 duration-300 ease-in-out shadow"
                  >
                    <div className="w-full h-[200px] sm:h-[260px] flex items-center justify-center bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-[12px] sm:text-sm mt-2 text-gray-800 text-center">
                      {product.name}
                    </h3>
                  </div>
                ))}
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hidden sm:block"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/AllColors"
          className="inline-block bg-black text-white py-2 px-10 rounded-lg hover:bg-gray-900 transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default ProductSlider;

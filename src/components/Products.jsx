import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { productsGallon } from '../constant/products';

const ProductSlider = () => {
  const scrollRef = React.useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
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
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hidden sm:block"
        >
          <FaChevronLeft size={18} />
        </button>

     
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 w-full overflow-x-auto scroll-smooth no-scrollbar px-2 sm:px-4"
          >
            {Array.from({ length: Math.ceil(productsGallon.length / 4) }, (_, i) => {
              const chunk = productsGallon.slice(i * 4, i * 4 + 4);
              return (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[160px] flex-shrink-0 grid grid-cols-2 gap-3"
                >
                  {chunk.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleClick(product.name)}
                      className="bg-white p-2 sm:p-3 rounded-lg transition-all cursor-pointer transform hover:scale-105 duration-300 ease-in-out"
                    >
                      <div className="w-full h-[130px] sm:h-[160px] flex items-center justify-center bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-[11px] sm:text-sm mt-2 text-gray-800 text-center">
                        {product.name}
                      </h3>
                    </div>
                  ))}
                </div>
              );
            })}
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

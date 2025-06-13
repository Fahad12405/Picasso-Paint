import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Step 1: import useNavigate
import Contact from "../../components/Contact"
import { products } from "../../constant/products";


// Only relevant categories (no TOPLAC as per your request)
const categories = ["ALL", "EVERNEW", "KENT"];

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const navigate = useNavigate();  // Step 1: initialize navigate

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>

<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
  {/* Section Header */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
      Our Premium Collection
      <span className="absolute bottom-0 left-0 w-full h-1  transform scale-x-75"></span>
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Discover our curated selection of high-quality products
    </p>
  </div>

  {/* Category Filter Buttons */}
  <div className="flex flex-wrap justify-center mb-12 gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-5 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300
          ${selectedCategory === cat
            ? "bg-teal-600 text-white shadow-md shadow-teal-200"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-teal-300"
          }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Products Grid */}
  {filteredProducts.length === 0 ? (
    <div className="text-center py-16">
      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
      <p className="text-gray-500">We couldn't find any products in this category.</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/product/${product.id}`);
            }
          }}
        >
          {/* Product Badge */}
          {product.isNew && (
            <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
              NEW
            </div>
          )}

          {/* Product Image */}
          <div className="h-60 bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Product Details */}
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {product.name}
              </h2>
              <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
           
          </div>
        </div>
      ))}
    </div>
  )}
</div>

      <Contact />
    </>
  );
}

export default Product;

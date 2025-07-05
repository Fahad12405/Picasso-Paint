import { useState } from "react";
import { Card } from "@/components/ui/card";
import Sofa from "@/assets/sofa.png";

export default function Component({ shades = [] }) {
  const [selectedColor, setSelectedColor] = useState(shades?.[3]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left side – Wall Preview */}
          <div className="w-full">
            <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div
                className="relative aspect-[4/3] rounded-lg"
                style={{ backgroundColor: selectedColor?.color }}
              >
                <img
                  src={Sofa}
                  alt="Sofa"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] h-auto object-contain transition-all duration-500 hover:scale-105"
                />
              </div>
            </Card>
          </div>

          {/* Right side – Product Info */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900"> Picasso Paint</h1>
              <p className="text-gray-500 text-sm mt-1">Premium Interior Wall Colors</p>
            </div>

            {/* Selected Shade */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900">Selected Shade:</p>
                <span className="text-sm text-gray-600">{selectedColor?.name}</span>
              </div>

              {/* Color Swatches */}
              {shades.length > 0 ? (
                <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {shades.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <button
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-2 transition-transform duration-200 hover:scale-105 ${
                          selectedColor.name === color.name
                            ? "border-gray-900 ring-2 ring-offset-2 ring-gray-400"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                      <p className="text-xs mt-1 text-gray-500">{color.code}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 font-medium">Shades Not Found</p>
              )}
              <p className="text-xs text-gray-400 italic">
                *Actual colors may slightly vary from display.
              </p>
            </div>

            {/* Product Features */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Product Features</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 pl-1">
                <li>Quick wash formula for easy maintenance</li>
                <li>Superior coverage and long-lasting durability</li>
                <li>Low odor and eco-friendly composition</li>
                <li>Perfect for interior walls & ceilings</li>
                <li>Provides a smooth, luxurious matte finish</li>
                <li>Resistant to stains, fungus, and moisture</li>
                <li>Dries quickly with minimal downtime</li>
                <li>Available in wide range of elegant shades</li>
                <li>Ideal for concrete, plaster, and drywall surfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

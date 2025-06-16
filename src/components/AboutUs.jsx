import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutimg from "../assets/Aboutimg.jpg"

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="overflow-hidden bg-white py-6 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          <div className="lg:pr-6" data-aos="fade-right">
            <div className="lg:max-w-xl">
              <h2 className="text-sm font-semibold text-[#BB2429]">About Us</h2>
              <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Picasso Paints – Company Profile
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Established in 1984, The Standard Packages began with offset tin
                printing and packaging, serving numerous local and international
                industries like paints, ghee, and chew tobacco. In 2011, we
                expanded into Paint & Varnish and Plastic Can Manufacturing.
              </p>
              <dl className="mt-6 space-y-5 text-gray-700 text-sm">
                <div className="relative pl-8">
                  <dt className="font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="absolute left-0 top-0 h-5 w-5 text-[#BB2429]"
                    >
                      <path d="M3 3h14v14H3V3z" />
                    </svg>
                    Manufacturing Units:
                  </dt>
                  <dd className="ml-1">
                    Printing, Can Making, Plastic Can Making, Paints & Varnish Production
                  </dd>
                </div>
                <div className="relative pl-8">
                  <dt className="font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="absolute left-0 top-0 h-5 w-5 text-[#BB2429]"
                    >
                      <path d="M4 3h12v2H4zM4 7h12v2H4zM4 11h8v2H4z" />
                    </svg>
                    Products:
                  </dt>
                  <dd className="ml-1">Evernew-Paints & Varnish, Kent-Paints</dd>
                </div>

                <div className="relative pl-8">
                  <dt className="font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="absolute left-0 top-0 h-5 w-5 text-[#BB2429]"
                    >
                      <path d="M5 4h10v2H5V4zm0 4h10v2H5V8zm0 4h6v2H5v-2z" />
                    </svg>
                    Paint Brands:
                  </dt>
                  <dd className="ml-1">
                    Decorative Paints, Vehicle Refinish Paints, Industrial Finishes under “Evernew” & “Kent”
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-4">
                <a
                  href="/Allitems"
                  className="rounded-md bg-[#BB2429] hover:bg-[#ff6369] px-4 py-2 text-sm font-semibold text-white "
                >
                  Explore Products
                </a>
                <a href="/Contact" className="text-sm font-semibold text-gray-700 mt-2">
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto"
            data-aos="fade-left"
          >
            <img
              src={Aboutimg}
              alt="Factory Overview"
              className="rounded-xl shadow-md ring-1 ring-gray-200 w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

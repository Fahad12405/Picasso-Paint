import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar.jsx'
import Hero from './components/Hero';
import About from './components/AboutUs.jsx'
import Products from './components/Products.jsx';
import ColorPalettes from './components/ColorPalette.jsx'
import Projects from './components/Projects';
import BannerSection from './components/BannerSection'
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer';
import Contacts from './components/Contact.jsx'
import AboutPage from './pages/About/about.jsx';
import Service from './pages/Service/Service.jsx'
import Contact from './pages/Contact/Conact.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AllItems from './pages/Product/Product.jsx';



import ProductDetail from './components/ProductDetails.jsx';
import ScrollToTop from './utils/ScrollToTop';
import { PlasticEmulsion } from './constant/shades/Evernew Shades/PlasticEmulsion';


function App() {
  return (
    <BrowserRouter>
      {/* <TopNavbar /> */}
      <Navbar />

      {/* <div className='flex flex-wrap justify-center mt-36'>
        {
          PlasticEmulsion.map((color, ind) => (
            <div
              key={ind}
              className="w-32 h-32 rounded text-nowrap overflow-hidden text-left line-clamp-1 flex flex-col items-center justify-center text-sm text-black border"
              style={{ backgroundColor: color.color }}
            >
              <span>{color.name}</span>
              <span>{color.code}</span>
            </div>
          ))
        }
      </div> */}


      <ScrollToTop />
      <Routes>
        {/* Home page route jahan saare sections hain */}


        <Route
          path="/"
          element={
            <>
              <Hero />
              <BannerSection />
              <About />
              <Products />
              <ColorPalettes />
              <Projects />
              <Testimonial />

              <FAQ />
              <Contact />
            </>
          }
        />


        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/AllItems" element={<AllItems />} />

        <Route path="/About" element={<AboutPage />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />




      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Service from '../../components/OurServices'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'


const Services = () => {
  return (
    <>
      <div className="mt-16">
        <Service />

      </div>

      <Projects />
      <Contact />
    </>
  );
};

export default Services;

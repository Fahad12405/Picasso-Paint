import React from 'react'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'


function Gallery() {
  return (
    <>
      <div className="mt-28">
        <Projects />

      </div>
<div className="mt-16">
      <Contact />
      </div>
    </>
  )
}

export default Gallery
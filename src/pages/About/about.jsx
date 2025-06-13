import React from 'react'
import About from '../../components/AboutUs'
import FAQ from '../../components/FAQ'
import Contact from '../../components/Contact'


function about() {
    return (


        <>

            <div className="mt-16">
                <About />
            </div>
            <FAQ />
            <Contact />

        </>


    )
}

export default about
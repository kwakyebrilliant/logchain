import React from 'react'
import Navigation from './Navigation';

import {
    FaFileAlt
  } from 'react-icons/fa'

import images2 from '../assets/images2.webp';
import Footer from './utils/Footer';

function TFinancing() {
  return (
    <div>
         <Navigation />

         <div className="relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${images2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
            ></div>

        <div className="relative z-0 py-8">


        </div>

        <section className="relative">
            <Footer />
          </section>

        </div>

    </div>
  )
}

export default TFinancing
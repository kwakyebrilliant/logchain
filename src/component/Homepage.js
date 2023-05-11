import React from 'react'
import Navigation from './Navigation'

import logistics from '../assets/logistics.jpg';

function Homepage() {
  return (
    <div>

      <Navigation />

      <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center">
          <h1
            className="bg-gradient-to-r from-green-600 via-teal-500 to-emerald-400 bg-clip-text text-3xl font-extrabold text-transparent lg:text-7xl"
          >
            Combating Fake Drugs.

            <span className="sm:block"> Through Blockchain. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
            Several problems in the pharmaceutical industry. 
            Using blockchain technology, we are Solving the supply chain problems in this industry.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>

        <div className="flex justify-center items-center">
              <div>
              <img
              alt="Guitar"
              src={logistics}
              className="w-full max-h-screen"
            />
              </div>
        </div>


    </div>
  )
}

export default Homepage
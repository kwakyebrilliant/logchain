import React from 'react'
import Navigation from './Navigation'

import landing from '../assets/landing.svg';

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

        <div className="flex lg:p-0 sm:p-0 pt-8 justify-center items-center">
            <div>
              <img alt="logistics2"
                src={landing}
                className="w-full"
              />
            </div>
        </div>


        <section className='flex justify-center items-center'>
          <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

              <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
                sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
              </p>
            </div>

            <div
              className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>

              

              

            

             
            </div>
          </div>
        </section>


    </div>
  )
}

export default Homepage
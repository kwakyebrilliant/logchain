import React from 'react'
import Navigation from './Navigation'

import { FaCartArrowDown, FaShippingFast, FaCheckCircle } from 'react-icons/fa'

import landing from '../assets/landing.svg';
import harvard from '../assets/harvard.png';

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
              <h2 className="text-3xl font-bold sm:text-4xl">For customers</h2>

              <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
                sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCartArrowDown className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Order.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaShippingFast className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Track.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>

              
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Receive.</h2>

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

        <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24 p-4">
         <p className='text-2xl font-bold'>Partners</p>  <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

        <div className="flex pt-8 justify-center items-center">
            <div>
              <h1>Hi</h1>
            </div>
        </div>


        <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24 p-4">
        <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

        <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              Accepted by over 500 cryptocurrencies all over the world
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Payment for an order can be made in any cryptocurrency of the
              user's choice
            </p>
          </div>


          {/* Testimonials */}
          <div
            className="max-w-3xl text-center mx-auto mt-20"
            data-aos="zoom-y-out"
          >
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src={harvard}
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ One of the most promising applications of emerging
                  blockchain technology is supply chain management. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Harvard Business Review
                </cite>
                <div className="text-gray-600">
                  {/* <span>CEO & Co-Founder</span>{" "} */}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://hbr.org/2020/05/building-a-transparent-supply-chain"
                  >
                    @Harvard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default Homepage
/* eslint-disable jsx-a11y/anchor-is-valid */
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

        <nav aria-label="Breadcrumb" className='pt-12'>
            <ol className="flex justify-start items-center gap-1 text-sm text-gray-600">
                <li>
                <span href="#" className="block transition hover:text-gray-700">
                    <span className="sr-only"> Invoicing </span>

                    <FaFileAlt className='lg:w-4 lg:h-4' />
                </span>
                </li>

                <li className="rtl:rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
                </li>

                <li>
                <span className="block transition hover:text-gray-700"> Trade Financing </span>
                </li>


            </ol>
            </nav>

            <div className="grid container mx-auto pt-20 p-8 grid-cols-1 gap-y-8 lg:grid-cols-1 lg:gap-x-16">
            <div className="mx-auto max-w-lg">
              <h2 className="text-3xl font-bold sm:text-6xl">Trade Financing.</h2>
              
              <div className='border-2 mt-8 border-emerald-500 p-8 bg-transparent rounded-3xl'>
              <p className="mt-4 text-gray-600">
                Search invoices not due
              </p>

            <div className="relative mt-2 mb-12">
              <label for="Search" className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search invoices..."
                className="w-full h-12 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button 
                  type="button" 
                  className="absolute border border-emerald-700 end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>

            </div>      
            </div>


            <div>
              
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 mt-12">
                
              <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
            </a>

            <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
        </a>

        <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
        </a>

        <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
        </a>

        <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
        </a>

        <a className="rounded-lg bg-white shadow-md p-8">
            <div className="flex items-center gap-4">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
            />

            <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                <h1>Asset Brook</h1>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                0xF...y6b
                </p>
            </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
            </p>
        </a>
                
              </div>

            </div>

            </div>


        </div>

        <section className="relative mt-8">
            <Footer />
          </section>

        </div>

    </div>
  )
}

export default TFinancing
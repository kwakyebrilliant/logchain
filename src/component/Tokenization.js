/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navigation from './Navigation';
import images2 from '../assets/images2.webp';

function Tokenization() {

  
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
        
        <div className="relative mb-16 z-0 py-8">
          <div className="grid container mx-auto pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Find Tokenized Assets</h2>
              
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                Obcaecati, autem.
              </p>

       

            <div className="relative mt-8">
              <label for="Search" className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search tokenized assets..."
                className="w-full focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
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
            
            <div>
              <h2 className="text-2xl font-bold mb-4 justify-center flex sm:text-3xl">Tokenization Statistics</h2>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Outstanding Invoices
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Undue Invoices
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Insurance Coverage
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Tokenization Value
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <section className="relative pb-20 bg-white">

        <div className="px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-xl text-emerald-700 ">
                Tokenized Assets
              </h2>
              <p className="text-2xl text-gray-600" data-aos="zoom-y-out">
                The following are some of tokenized assets on the platform.
              </p>
            </div>
            </div>



            <div className="px-16">

              <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 gap-x-8 gap-y-8">
                <a className="rounded-lg bg-gray-100 p-8">
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
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
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
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
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
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
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
                  </p>
                </a>

                

              </div>
            </div>

         
        </div>
        </section>


      </div>
    </div>
  );
}

export default Tokenization;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navigation from './Navigation';
import images2 from '../assets/images2.webp';
import banner from '../assets/images2.svg';

import '../component/utils/animations.css';

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



            <div className="lg:px-16 px-4">

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


       



        <section className="relative h-screen bg-white pb-20" style={{ backgroundImage: `url(${banner})` }}>
        <div className='bg-gray-50 shadow-lg lg:mx-20 mx-8 rounded-md h-full'>
          <div className='flex justify-center lg:pt-16 pt-8'>
            <h1 className='lg:text-5xl text-2xl font-bold text-gray-700'>Tokenization in</h1>
            <h1 className='lg:text-5xl text-2xl font-bold ml-1.5 text-emerald-700'>Today</h1>
          </div>

          <div className="overflow-x-auto">
            <nav aria-label="Tabs" className='sm:w-full md:w-2/3 mx-auto'>
              <ul className="flex border-b border-gray-100 whitespace-nowrap">
                {/* Tab 1 */}
                <li className="flex-1">
                  <a className="relative block p-4" href="">
                    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                    <div className="flex items-center justify-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Settings</span>
                    </div>
                  </a>
                </li>

                {/* Tab 2 */}
                <li className="flex-1">
                  <a className="relative block p-4" href="">
                    <div className="flex items-center justify-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Messages</span>
                    </div>
                  </a>
                </li>

                {/* Tab 3 */}
                <li className="flex-1">
                  <a className="relative block p-4" href="">
                    <div className="flex items-center justify-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Archive</span>
                    </div>
                  </a>
                </li>

                {/* Tab 4 */}
                <li className="flex-1">
                  <a className="relative block p-4" href="">
                    <div className="flex items-center justify-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Notifications</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>


          

          
        </div>
        <div className="absolute -top-1 right-0 mr-16 flex justify-end items-end">
          <div className="lg:h-40 lg:w-40 rounded-full bg-emerald-50 shadow-lg transform rotate-45 animate-circle" />
        </div>
        <div className="absolute bottom-0 -left-0 flex justify-end items-end">
          <div className="lg:w-24 lg:h-24 rounded-full bg-emerald-50 shadow-lg transform rotate-45 animate-circle -ml-10" />
        </div>
      </section>



      </div>
    </div>
  );
}

export default Tokenization;

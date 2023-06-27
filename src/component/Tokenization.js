/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navigation from './Navigation';
import images2 from '../assets/images2.webp';
import harvard from '../assets/harvard.png';

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
              
              <a className="mt-8 inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-emerald-600 hover:border-emerald-600 hover:border cursor-pointer focus:outline-none focus:ring">
                Find Them
              </a>
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

        <section className="relative bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">
                Accepted by various participants in the supply chain
              </h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                All transactions on the platform are made with XRP 
              </p>
            </div>


            {/* Testimonials */}
            <div
              className="max-w-3xl text-center mx-auto mt-16"
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
    </div>
  );
}

export default Tokenization;

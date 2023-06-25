/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation'
// import logo from '../assets/xrp-symbol-black.svg'

import {
  FaCheckCircle 
} from 'react-icons/fa'

 
import {
  ChipIcon, 
  SupportIcon
} from '@heroicons/react/solid'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';

import landing from '../assets/landing.svg';
import harvard from '../assets/harvard.png';
import pharmacy from '../assets/pharmacy.jpg'

import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>

      <Navigation />

      <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-32 lg:flex lg:h-screen lg:items-center">
        <div className="relative mx-auto text-center">
          <h1
            className="bg-gradient-to-r from-green-600 via-teal-500 to-emerald-400 bg-clip-text text-3xl font-extrabold text-transparent lg:text-7xl"
          >
            Reshaping Supply Chain Operations.
            <span className="sm:block">On The XRP Ledger (XRPL). </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
            This comprehensive platform empowers suppliers, manufacturers,
            and buyers to streamline their financial transactions and mitigate supply chain risks.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full btn-scroll rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#about"
              data-role="smoothscroll"
            >
              Read More
            </a>
          </div>

          {/* Diagonal Circles */}
          <div className="absolute -top-40 -right-8 flex justify-end items-end">
            <div className="lg:h-40 lg:w-40 rounded-full bg-white shadow-lg transform rotate-45" />
          </div>
          <div className="absolute -bottom-8 -left-0 flex justify-end items-end">
            <div className="lg:w-24 lg:h-24 rounded-full bg-white shadow-lg transform rotate-45 -ml-10" />
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


        <section id="about" className='flex justify-center items-center'>
          <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Know How</h2>

              <p className="mt-4 text-gray-400">
              This is a Supply Chain Finance and Insurance decentralized application (dApp) built
              on the XRP Ledger (XRPL) that provides a comprehensive solution for supply chain participants,
              offering transparent financing options and insurance coverage.
              Read the following for better understanding.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Invoice Due.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                  Suppliers can request funds from buyers or manufacturers against 
                  their outstanding invoices, which helps them maintain a steady cash 
                  flow while waiting for payment from buyers. 
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Invoice Factoring.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                  Suppliers can submit their invoices to the platform, indicating
                  the amount they wish to receive in exchange for selling the invoice
                  at a discounted rate and matching inestors also make their offer.
                  </p>
                </div>
              </div>

              
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Trade Financing.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                  Suppliers can request short-term loans against the value of their goods in transit.
                  Lenders on the platform can review the verified shipping details and collateral information
                  to assess the risk and determine the loan amount and terms. 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Insurance Coverage.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                  Participants in the supply chain can select insurance coverage options to protect against 
                  various risks such as damage, loss, or delays during transportation. 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-emerald-600 p-4">
                <FaCheckCircle className=' text-white lg:w-5 lg:h-5' />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Assets Tokenization.</h2>

                  <p className="mt-1 text-sm text-gray-400">
                  The platform enables the tokenization of goods, invoices, and insurance policies on the XRPL.
                  Tokenization enhances the tracking and traceability of assets within the supply chain. 
                  </p>
                </div>
              </div>
            

             
            </div>
          </div>
        </section>


        <div className='w-full my-14'>

        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={pharmacy} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Got Questions?</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>
                We have a reliable team available to assist you in all your questions and help you go about your 
                activities on the platform. Remember we are here to serve you to get the best of deals available on
                this platform.
            </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

            <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                            Sales
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <PhoneIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <Link to="/faq">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                            </Link>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                        Technical Support
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <SupportIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <Link to="/faq">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                            </Link>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                            Media Inquiries
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <ChipIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <Link to="/faq">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                            </Link>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    
            </div>    

        </div>

        </div>

        {/* <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24">
         <p className='text-2xl font-bold'>Transact</p>  <div className="w-full border-b border-gray-300"></div>
        </div>
        </div> */}

        {/* <div className="flex py-4 justify-center items-center">
            <div>
          <div className="max-w-sm md:max-w-4xl mx-auto">
            <div className="flex items-center justify-center col-span-2 md:col-auto">
             <img 
              src={logo} 
              alt='logo' 
              className='h-16 w-16 rounded-full bg-emerald-600 shadow-lg' 
             />
            </div>
            
          </div>
            </div>
        </div> */}


        {/* <div className="relative">
        <div className="flex items-center lg:pt-4 lg:px-24">
        <div className="w-full border-b border-gray-300"></div>
        </div>
        </div> */}

        <section className="relative">

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
          <div className="absolute -top-1 -right-8 flex justify-end items-end">
            <div className="lg:h-40 lg:w-40 rounded-full bg-white shadow-lg transform rotate-45" />
          </div>
          <div className="absolute -bottom-8 -left-0 flex justify-end items-end">
            <div className="lg:w-24 lg:h-24 rounded-full bg-white shadow-lg transform rotate-45 -ml-10" />
          </div>
        </div>
      </div>
    </section>


      
    <footer aria-label="Site Footer" className="bg-white">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Financing Options
          </h2>

          <p className="max-w-sm mx-auto mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
            ipsum eos temporibus ea nihil.
          </p>

          <a
            href="/login"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring active:bg-emerald-600"
          >
            Get Started
          </a>
        </div>

        <div
          className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24"
        >
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

            </ul>
          </nav>

          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">


            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>


    </div>
  )
}

export default Homepage
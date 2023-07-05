/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Navigation from './Navigation';

import {
    FaFileAlt
  } from 'react-icons/fa'

import ReactModal from 'react-modal';

import images2 from '../assets/images2.webp';
import Footer from './utils/Footer';

const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '650px', // Set the desired height of the container
      overflowY: 'scroll', // Enable vertical scrolling
    },
  };

function IFactoring() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [itemOne, setItemOne] = useState(false);

    const closeModal = () => {
        // Close the modal and perform any additional actions
        setModalIsOpen(false);
      };

  return (
    <div>

        <Navigation />

        <div className="relative">
        {/* background image */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${images2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-0 py-8">

          {/* breadcrumps here */}
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
                <span className="block transition hover:text-gray-700"> Invoice Factoring </span>
                </li>


            </ol>
            </nav>

          <div className="grid container mx-auto pt-20 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-6xl">Factoring your invoices.</h2>
              
              <div className='border-2 mt-16 border-emerald-500 p-8 bg-transparent rounded-3xl'>
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


            {/* modal starts here */}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Transaction Success Modal"
                style={customStyles}
            >
                <button className='bg-black hover:bg-red-700 hover:text-white px-1 text-white' onClick={closeModal}>X</button>
                {/* section starts here */}
                <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                        <header>
                            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Asset Brook</h2>

                            <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                            </p>
                        </header>

                        {itemOne ? (
                            <a
                            onClick={() => setItemOne(!itemOne)}
                            className="inline-block cursor-pointer px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                        >
                            Cancel Offer
                        </a>
                        ) : (
                        <a
                            onClick={() => setItemOne(!itemOne)}
                            className="inline-block cursor-pointer px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                        >
                            Make Offer
                        </a>
                        )}

                        <div className='pt-4'>
                        {itemOne && <div className="item1">
                        <h3 className='font-bold text-lg text-emerald-600'>Your Offer</h3>
                        <div>
             

                        <label
                        for="Amount"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600"
                        >
                        <span className="text-xs font-medium text-gray-700"> Amount </span>

                        <input
                            type="number"
                            id="Amount"
                            placeholder="Enter proposed invoice amount"
                            className="mt-1 w-full bg-transparent border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        </label>

                        <a
                            className="inline-block cursor-pointer px-12 py-3 mt-4 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                        >
                            Submit Offer
                        </a>

                        </div>
                        </div>}
                        </div>

                        
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <li>
                            <a className="block group p-4 rounded-lg bg-gray-100">
                            

                            <div className="">
                                <h3 className="font-medium text-lg text-gray-900">
                                Basic Information
                                </h3>
                                <hr />

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Number
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        #ASGHS007
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Amount
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        $150
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Quantity
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        80
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Unit Price
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        $1.875
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Discount Rate
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        8%
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Due Date
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        18-08-2023
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Name of Buyer
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Name of buyer"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Contact of Buyer
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Contact of buyer"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Buyer Address
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Buyer address"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>


                                
                            </div>
                            </a>
                        </li>

                        <li>
                        <a className="block group p-4 rounded-lg bg-gray-100">
                            

                            <div className="">
                                <h3 className="font-medium text-lg text-gray-900">
                                Other Information
                                </h3>
                                <hr />

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Repayment Plan
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <select className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm">
                                    <option value="">Select payment plan</option>
                                    <option value="upfront">Upfront</option>
                                    <option value="2 installment">2 installment</option>
                                    <option value="3 installment">3 installment</option>
                                    </select>
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Carrier Name
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Carrier name"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Carrier Contact
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Carrier contact"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insurance Provider
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <select className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm">
                                    <option value="">Select insurance provider</option>
                                    <option value="enterprise">Enterprise</option>
                                    <option value="glico">Glico</option>
                                    </select>
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insured Amount
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <input
                                        type="text"
                                        placeholder="Insured amount"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>


                                <div className='mt-2 mb-6'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insurance Coverage
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <label className="text-sm text-gray-500">
                                        Start date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>

                                    <p className='mt-1'>
                                    <label className="text-sm text-gray-500">
                                        End date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>


                                
                            </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>
                {/* section ends here */}
                
            </ReactModal>
            {/* modal ends here */}
            
            <div className="overflow-y-auto h-[600px]">
              {/* list invoice factoring */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                
              <a onClick={() => setModalIsOpen(true)} className="rounded-lg cursor-pointer bg-white shadow-md p-8">
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

            <a onClick={() => setModalIsOpen(true)} className="rounded-lg cursor-pointer bg-white shadow-md p-8">
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
        
        {/* footer here */}
        <section className="relative">
            <Footer />
          </section>

        </div>
    </div>
  )
}

export default IFactoring
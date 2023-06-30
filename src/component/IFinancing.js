import React from 'react'
import Navigation from './Navigation';
import wave from '../assets/wave.svg';

import {
    FaFileAlt,
  } from 'react-icons/fa'

function IFinancing() {
  return (
    <div>
         <Navigation />
         
         
            
         <div className="relative">
        <div className="fixed inset-0 z-0"></div>
        <div className="absolute top-0 right-0 h-96 overflow-hidden">
            <img
            src={wave}
            alt="Wave"
            className="h-full transform translate-x-96 "
            />
        </div>


        <nav aria-label="Breadcrumb" className='pt-20'>
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
                <span className="block transition hover:text-gray-700"> Invoice Financing </span>
                </li>


            </ol>
            </nav>


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

            </div>
            </div>


        </div>

        <div className="relative">
        <div className="fixed inset-0 z-0"></div>
        <div className="absolute -bottom-20 left-0 h-96 overflow-hidden">
            <img
            src={wave}
            alt="Wave"
            className="h-full transform -translate-x-96"
            />
        </div>


        </div>



    </div>
  )
}

export default IFinancing
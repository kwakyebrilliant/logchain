/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import { FaPlusCircle,
  FaShippingFast, 
  FaCheckCircle,
  FaCartArrowDown,
  FaExclamation,
  FaPeopleCarry 
} from "react-icons/fa";


function AdminSummary() {
  return (
    <div className='text-black'>
      <>
        <div className='flex flex-auto'>
          <Sidebar />
          <div className='grow'>
            <PartialNavbar />

            <div className='m-5'>
            
            <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:justify-between sm:items-center sm:flex">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, Brilliant!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check your statistics on LOGCHAIN 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
            </div>

            <div className='flex m-5 py-4'>
            <a
              className="flex rounded border border-emerald-600 bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </a>
            </div>

            
            <div className="m-5 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

            
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaPeopleCarry className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Customers
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF CUSTOMERS
                </p>
              </div>

              <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                0
              </span>
            </a>


            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaCartArrowDown className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Orders
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF ORDERS
                </p>
              </div>

              <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                0
              </span>
            </a>

              
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaExclamation className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                All Pending Orders
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF PENDING ORDERS
                </p>
              </div>

              <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                0
              </span>
            </a>
            

             
            </div>


            <div className="m-5 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

            
              <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="lg:h-5 lg:w-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    All Customers
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                    TOTAL NUMBER OF CUSTOMERS
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>


              <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                <FaCartArrowDown className=' text-white lg:w-5 lg:h-5' />
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    All Orders
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                    TOTAL NUMBER OF ORDERS
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>

                
              <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                <FaExclamation className=' text-white lg:w-5 lg:h-5' />
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Pending Orders
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                    TOTAL NUMBER OF PENDING ORDERS
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>


              
              </div>



          </div>
        </div>
      </>
    </div>
  )
}

export default AdminSummary
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import { FaPlusCircle,
  FaShippingFast, 
  FaCheckCircle 
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
                <FaShippingFast className='text-white lg:w-5 lg:h-5' />
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
        </div>
      </>
    </div>
  )
}

export default AdminSummary
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PartialNavbar from '../Partials/PartialNavbar'
import Sidebar from '../Partials/Sidebar'

import { FaPlusCircle,
  FaProductHunt, 
  FaArrowCircleLeft,
  FaExclamation,
  FaPeopleCarry,
  FaFileAlt 
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
                    Welcome Back, Admin!
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

            
            <div className="m-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

            
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaPeopleCarry className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Users
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF USERS
                </p>
              </div>

              <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                0
              </span>
            </a>


            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaFileAlt className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Invoices
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF INVOICES
                </p>
              </div>

              <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                0
              </span>
            </a>

              
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
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

            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaArrowCircleLeft className=' text-white lg:w-5 lg:h-5' />
                </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Returned Orders
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF RETURNED ORDERS
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>


              <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                <FaProductHunt className=' text-white lg:w-5 lg:h-5' />
                </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Products
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF PRODUCTS AVAILABLE
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>

              
              <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
                <div className="pt-4 text-gray-500">

                <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                <FaProductHunt className=' text-white lg:w-5 lg:h-5' />
                </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Products
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF PRODUCTS AVAILABLE
                  </p>
                </div>

                <span
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                  0
                </span>
              </a>

             
            </div>



            <div className='m-5 mt-12 border grid grid-cols-1 rounded-md shadow-md'>

              <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Orders
                </h3>

                <form>
                  <select
                      className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="returned">Returned</option>
                  </select>
                </form>
              </div>

              <div className="relative">
              <div className="flex items-center py-4">
              <div className="w-full border-b border-gray-300"></div>
              </div>
              </div>


              <div className="overflow-x-auto px-10">
            <table className="min-w-full overflow-x-auto divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left bg-emerald-50 rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                NAME
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                IMAGE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                ORDER DATE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                QUANTITY
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                PRICE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                ADDRESS
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                STATE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                CITY
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                CONTACT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                ZIPCODE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                REVIEW
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg font-medium text-center text-gray-900">
                #1
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
            </tr>


            
            </tbody>
        </table>
        </div>


            </div>

            


            <div className='m-5 mt-12 border grid grid-cols-1 rounded-md shadow-md'>

              <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Assign Roles
                </h3>

                <h3 className="mt-4 mx-8 text-md italic font-bold text-emerald-600 sm:text-md">
                  Already assigned roles will be overided
                </h3>
              </div>

              <div className="relative">
              <div className="flex items-center py-4">
              <div className="w-full border-b border-gray-300"></div>
              </div>
              </div>


              <div className='flex px-8 py-2'>

                    <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="0xF...y6b"
                    />
                    </div>
              

                <form className='flex'>
                  <select
                      className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                        <option value="">User type</option>
                        <option value="administrator">Administrator</option>
                        <option value="supplier">Supplier</option>
                        <option value="manufacturer">Manufacturer / Buyer</option>
                        <option value="insurance">Insurance Provider</option>
                  </select>
                </form>
      
              <div>
              <a
                    className=" w-full justify-center flex rounded-lg bg-emerald-600 p-4 pe-12 text-sm font-medium hover:bg-transparent border border-emerald-600 hover:text-emerald-600 text-white"
                    type="submit"
                    href='#'
                    >
                    <span className="text-sm font-medium">
                    Assign Role
                    </span>
                    </a>
              </div>
               


              </div>


              </div>


              <div className='m-5 mt-12 border grid grid-cols-1 rounded-md shadow-md'>

              <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Customers
                </h3>
              </div>

              <div className="relative">
              <div className="flex items-center py-4">
              <div className="w-full border-b border-gray-300"></div>
              </div>
              </div>


              <div className="overflow-x-auto px-10">
              <table className="min-w-full justify-start overflow-x-auto divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left bg-emerald-50 rtl:text-right">
              <tr>
                <th className="whitespace-nowrap text-left px-4 text-sm text-gray-400">
                ADDRESS
                </th>
              </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
              <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg font-medium text-gray-900">
                #1
                </td>
              </tr>



              </tbody>
              </table>
              </div>


              </div>


              <div className='m-5 my-12 border grid grid-cols-1 rounded-md shadow-md'>

              <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  All Products
                </h3>

                <form>
                  <select
                      className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="returned">Returned</option>
                  </select>
                </form>
              </div>

              <div className="relative">
              <div className="flex items-center py-4">
              <div className="w-full border-b border-gray-300"></div>
              </div>
              </div>


              <div className="overflow-x-auto px-10">
              <table className="min-w-full overflow-x-auto divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left bg-emerald-50 rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                NAME
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                PRICE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                IMAGE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                CATEGORY
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                MANUFACTURER DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                EXPIRY DATE
                </th>
              </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
              <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg font-medium text-center text-gray-900">
                #1
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
              </tr>



              </tbody>
              </table>
              </div>


              </div>


          </div>
        </div>
      </>
    </div>
  )
}

export default AdminSummary
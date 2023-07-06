/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from '../Partials/Sidebar';
import PartialNavbar from '../Partials/PartialNavbar';

import {
    FaExclamation
  } from "react-icons/fa";

function Insurance() {
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
                        Welcome Back, Provider!
                        </h1>
    
                        <p className="mt-1.5 text-sm text-gray-900">
                        Check your statistics on XRChain 🎉
                        </p>
                    </div>
    
                    </div>
                </div>
                </header>
                </div>
    
    
                <div className="m-5 grid mt-12 grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                
                  
                <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
                  <div className="pt-4 text-gray-500">
    
                  <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
                  <FaExclamation className=' text-white lg:w-5 lg:h-5' />
                    </span>
    
                    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    All Insurance
                    </h3>
    
                    <p className="mt-2 hidden text-sm sm:block">
                      TOTAL NUMBER OF INSURANCE
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
                    All In-progress
                    </h3>
    
                    <p className="mt-2 hidden text-sm sm:block">
                      TOTAL NUMBER OF IN-PROGRESS INSURANCE
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
                      All Closed
                    </h3>
    
                    <p className="mt-2 hidden text-sm sm:block">
                    TOTAL NUMBER OF CLOSED INSURANCE
                    </p>
                  </div>
    
                  <span
                    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                  >
                    0
                  </span>
                </a>
    
    
                 
                </div>

                <div className='m-5 my-12 border grid grid-cols-1 rounded-md shadow-md'>

                <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    Invoice Factoring
                </h3>

                <form>
                    <select
                        className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                        <option value="all">All</option>
                        <option value="progress">In-progress</option>
                        <option value="closed">Closed</option>
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
                INVOICE NUMBER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INVOICE AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                PROVIDER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURED AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                START DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                END DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                STATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                ACTION
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
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <p className="whitespace-nowrap text-sm">Closed</p>
                </span>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                    />
                </svg>

                <p className="whitespace-nowrap text-sm">Reimburse</p>
                </span>
                </td>
                </tr>



                </tbody>
                </table>
                </div>


                </div>


                <div className='m-5 my-12 border grid grid-cols-1 rounded-md shadow-md'>

                <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    Trade Financing
                </h3>

                <form>
                    <select
                        className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                        <option value="all">All</option>
                        <option value="progress">In-progress</option>
                        <option value="closed">Closed</option>
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
                INVOICE NUMBER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INVOICE AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                PROVIDER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURED AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                START DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                END DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                STATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                ACTION
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
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <p className="whitespace-nowrap text-sm">Closed</p>
                </span>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                    />
                </svg>

                <p className="whitespace-nowrap text-sm">Reimbursed</p>
                </span>
                </td>
                </tr>



                </tbody>
                </table>
                </div>


                </div>
    
    
                <div className='m-5 my-12 border grid grid-cols-1 rounded-md shadow-md'>

                <div className='flex px-8 py-2'>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    Invoice Financing
                </h3>

                <form>
                    <select
                        className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                        <option value="all">All</option>
                        <option value="progress">In-progress</option>
                        <option value="closed">Closed</option>
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
                INVOICE NUMBER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INVOICE AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                PROVIDER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURED AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                START DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                END DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                STATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                ACTION
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
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <p className="whitespace-nowrap text-sm">In-progress</p>
                </span>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">
                <span
                className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                >
                <p className='text-sm'>No action</p>
                </span>
                </td>
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

export default Insurance
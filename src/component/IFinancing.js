/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation';
import wave from '../assets/wave.svg';

import {
    FaFileAlt,
    FaEye
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


            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:pt-32 lg:flex lg:h-screen lg:items-center">
            <div className="relative mx-auto text-center">
            <h1
                className=" text-3xl font-extrabold lg:text-7xl"
            >
                Invoice Financing
                <span className="sm:block">On The XRP Ledger. </span>
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

        <div className="bg-gray-50">
        <div className="grid container mx-auto sm:pt-20 py-8  px-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">

        <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-2xl font-bold mb-4 justify-center flex sm:text-3xl">For Today</h2>
        <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
            Obcaecati, autem.
         </p>
        </div>

        <div className='bg-black p-8 rounded-2xl shadow-2xl'>
        <div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl mb-4">
            <div className="flex items-start gap-4">
            <span className="text-emerald-600">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>

            <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Asset Brook </strong>

                <p className="mt-1 text-sm text-gray-700">
                Asset description here
                </p>
            </div>

            <a className="text-white p-1 rounded-lg bg-emerald-600 cursor-pointer">
                <FaEye className="lg:w-4 lg:h-4" />
            </a>
            </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl mb-4">
            <div className="flex items-start gap-4">
            <span className="text-emerald-600">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>

            <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Asset Brook </strong>

                <p className="mt-1 text-sm text-gray-700">
                Asset description here
                </p>
            </div>

            <a className="text-white p-1 rounded-lg bg-emerald-600 cursor-pointer">
                <FaEye className="lg:w-4 lg:h-4" />
            </a>
            </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl mb-4">
            <div className="flex items-start gap-4">
            <span className="text-emerald-600">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>

            <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Asset Brook </strong>

                <p className="mt-1 text-sm text-gray-700">
                Asset description here
                </p>
            </div>

            <a className="text-white p-1 rounded-lg bg-emerald-600 cursor-pointer">
                <FaEye className="lg:w-4 lg:h-4" />
            </a>
            </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl mb-4">
            <div className="flex items-start gap-4">
            <span className="text-emerald-600">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>

            <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Asset Brook </strong>

                <p className="mt-1 text-sm text-gray-700">
                Asset description here
                </p>
            </div>

            <a className="text-white p-1 rounded-lg bg-emerald-600 cursor-pointer">
                <FaEye className="lg:w-4 lg:h-4" />
            </a>
            </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl mb-4">
            <div className="flex items-start gap-4">
            <span className="text-emerald-600">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>

            <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Asset Brook </strong>

                <p className="mt-1 text-sm text-gray-700">
                Asset description here
                </p>
            </div>

            <a className="text-white p-1 rounded-lg bg-emerald-600 cursor-pointer">
                <FaEye className="lg:w-4 lg:h-4" />
            </a>
            </div>
        </div>

        </div>
        </div>

  
        </div>
        </div>


        <section className="relative py-12 px-8 bg-white">

        <div className="relative px-16 py-8">
              <label for="Search" className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search invoices..."
                className="w-4/12 h-12 focus:outline-none rounded-full border-none border-gray-100 pe-10 ps-4 text-sm  py-2.5 shadow-md sm:text-sm"
              />

            </div>

        <div className="lg:px-16 px-4">

        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 gap-x-8 gap-y-8">
        <a className="rounded-lg bg-white shadow-lg p-8">
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



        {/* Diagonal Circles */}
        <div className="absolute -top-40 right-0 flex justify-end items-end mt-20 mr-20">
        <span className="lg:h-40 lg:w-40 absolute inline-flex animate-ping bg-emerald-400 opacity-75 rounded-full shadow-lg transform rotate-45" ></span>
        <span className="relative inline-flex rounded-full lg:h-40 lg:w-40 bg-emerald-500"></span>
        </div>
        <div className="absolute bottom-0 left-0 flex justify-end items-end ml-12">
        <span className="lg:w-24 lg:h-24 absolute inline-flex animate-ping rounded-full bg-emerald-400 shadow-lg transform rotate-45" ></span>
        <span className="relative inline-flex rounded-full lg:w-24 lg:h-24 bg-emerald-500"></span>
        </div>

        </section>




    </div>
  )
}

export default IFinancing
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FaHospitalSymbol } from 'react-icons/fa'
import pharmacy from '../assets/pharmacy_c.jpg'

function Login() {
  return (
    <div>

                <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                    <img
                        alt="pharmacy"
                        src={pharmacy}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="/">
                            <FaHospitalSymbol className=' text-white lg:w-[35px] lg:h-[35px]' />
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Welcome to Logchain
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Using blockchain technology, we are Solving the supply chain problems in the pharmaceutical industry.
                        </p>
                    </div>
                    </section>

                    <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                        <a
                            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                            href="/"
                        >
                           <FaHospitalSymbol className=' text-emerald-600 lh-8 sm:h-10' />
                        </a>

                        <h1
                            className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to Logchain
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                        Using blockchain technology, we are Solving the supply chain problems in the pharmaceutical industry.
                        </p>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        

                       


                        
                        </form>
                    </div>
                    </main>
                </div>
                </section>

       
    </div>
  )
}

export default Login
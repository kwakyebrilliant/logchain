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
                    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                    <div class="max-w-xl lg:max-w-3xl">
                        <div class="relative -mt-16 block lg:hidden">
                        <a
                            class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                            href="/"
                        >
                           <FaHospitalSymbol className=' text-emerald-600 lh-8 sm:h-10' />
                        </a>

                        <h1
                            class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to Logchain
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                        Using blockchain technology, we are Solving the supply chain problems in the pharmaceutical industry.
                        </p>
                        </div>

                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="FirstName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            First Name
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="LastName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Last Name
                            </label>

                            <input
                            type="text"
                            id="LastName"
                            name="last_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6">
                            <label for="Email" class="block text-sm font-medium text-gray-700">
                            Email
                            </label>

                            <input
                            type="email"
                            id="Email"
                            name="email"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="Password"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Password
                            </label>

                            <input
                            type="password"
                            id="Password"
                            name="password"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="PasswordConfirmation"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Password Confirmation
                            </label>

                            <input
                            type="password"
                            id="PasswordConfirmation"
                            name="password_confirmation"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6">
                            <label for="MarketingAccept" class="flex gap-4">
                            <input
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />

                            <span class="text-sm text-gray-700">
                                I want to receive emails about events, product updates and
                                company announcements.
                            </span>
                            </label>
                        </div>

                        <div class="col-span-6">
                            <p class="text-sm text-gray-500">
                            By creating an account, you agree to our
                            <a href="#" class="text-gray-700 underline">
                                terms and conditions
                            </a>
                            and
                            <a href="#" class="text-gray-700 underline">privacy policy</a>.
                            </p>
                        </div>

                        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                            Create an account
                            </button>

                            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                            Already have an account?
                            <a href="#" class="text-gray-700 underline">Log in</a>.
                            </p>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
                </section>

       
    </div>
  )
}

export default Login
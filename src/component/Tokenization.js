import React from 'react'
import Navigation from './Navigation'
import banner from '../assets/banner.svg'

function Tokenization() {
  return (
    <div>

      <Navigation />

      <div className="relative pt-8">
                        <img src={banner} alt="Background" className="w-full rounded object-cover h-screen" />

                        <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                        
                        <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        In the form below, provide the audio file and the necessary details including royalties owners and their entitlement.
                        </p>
                        </div>
                   
                </div>


<header className="bg-white py-20">
  <div className="w-full px-4 py-8 sm:px-6">
    <div className="flex items-center sm:justify-between sm:gap-4">
      <div className="relative hidden sm:block">
        <label className="sr-only" for="search"> Search </label>

        <input
          className="h-10 w-full rounded-lg border focus:outline-none text-black bg-gray-50 pe-10 ps-4 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search assets"
        />

        <button
          type="button"
          className="absolute end-1 top-1/2 -translate-y-1/2 border-emerald-600 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
      >
        <div className="flex gap-4">
          <button
            type="button"
            className="block shrink-0 border-emerald-600 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="group flex shrink-0 items-center rounded-lg transition"
        >
          <span className="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <p className="ms-2 hidden text-left text-xs sm:block">
            <strong className="block font-medium">Eric Frusciante</strong>

            <span className="text-gray-500"> eric@frusciante.com </span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div className="mt-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Welcome Back, Barry!
      </h1>

      <p className="mt-1.5 text-sm text-gray-500">
        Your website has seen a 52% increase in traffic in the last month. Keep
        it up! 🚀
      </p>
    </div>
  </div>
</header>

      
    </div>
  )
}

export default Tokenization
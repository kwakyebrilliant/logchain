/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation'
import banner from '../assets/banner.svg'

function Tokenization() {
  return (
    <div>

      <Navigation />

        <div className="relative pt-8">
          <img src={banner} alt="Background" className="w-full rounded object-cover h-screen" />
    
          <div
      className="grid absolute inset-0 pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Find tokenized assets</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          className="mt-8 inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-200 hover:text-black cursor-pointer focus:outline-none focus:ring"
        >
          Get Started Today
        </a>
      </div>

      <div>
      <h2 className="text-2xl font-bold mb-4 justify-center flex sm:text-3xl">Tokenization Statistics</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
        

      <div
          className="flex flex-col rounded-lg border border-emerald-600 hover:bg-white hover:border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Outstanding Invoices
          </dt>

          <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
            4.8m
          </dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-emerald-600 hover:bg-white hover:border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Undue Invoices
          </dt>

          <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
            4.8m
          </dd>
        </div>


        <div
          className="flex flex-col rounded-lg border border-emerald-600 hover:bg-white hover:border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Insurance Coverage
          </dt>

          <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
            4.8m
          </dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-emerald-600 hover:bg-white hover:border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Tokenization Value
          </dt>

          <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
            $4.8m
          </dd>
        </div>
       


      </div>
      </div>
    </div>
                    
        </div>

      
    </div>
  )
}

export default Tokenization
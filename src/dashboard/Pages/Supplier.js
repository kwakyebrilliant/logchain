/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import PartialNavbar from '../Partials/PartialNavbar'
import Sidebar from '../Partials/Sidebar'

import {
    FaExclamation,
    FaPlusCircle
  } from "react-icons/fa";


import ReactModal from 'react-modal';

const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%', // Default width for small screens
      height: '650px', // Set the desired height of the container
      overflowY: 'scroll', // Enable vertical scrolling
    },
  };
  
  // Media query to adjust width for large screens
  if (window.innerWidth > 768) {
    customStyles.content.width = '80%';
  }

function Supplier() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        // Close the modal and perform any additional actions
        setModalIsOpen(false);
      };

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


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
                    Welcome Back, Supplier!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check your statistics on XRChain 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
            </div>

            <div className='flex m-5 py-4'>
            <a
              className="flex cursor-pointer rounded border border-emerald-600 bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={() => setModalIsOpen(true)}
            >
              <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Invoice
            </a>
            </div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Transaction Success Modal"
                style={customStyles}
            >
                <button className='bg-black hover:bg-red-700 hover:text-white px-1 text-white' onClick={closeModal}>X</button>

                
                <form
                className="mb-20 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                <p className="text-center text-lg font-medium">Choose invoice kind
                <hr /></p>

                <select
                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    value={selectedOption}
                    onChange={handleOptionChange}>
                    <option value="">User Invoice Kind</option>
                    <option value="incoming">Incoming</option>
                    <option value="outgoing">Outgoing</option>
                </select>
      
                {
                      selectedOption ==='incoming' && (

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                            <div>
                            <h3 className="font-medium text-lg text-gray-900">
                                Basic Information
                            </h3>

                            <div className='pt-4'>
                                <label for="invoicenumber" className="sr-only">Invoice Number</label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Invoice Number"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="invoiceamount" className="sr-only">Invoice Amount</label>

                                <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Invoice Amount"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="invoicequantity" className="sr-only">Invoice Quantity</label>

                                <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Invoice Quantity"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="invoiceprice" className="sr-only">Invoice Price</label>

                                <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Invoice Price"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="discountrate" className="sr-only">Discount Rate</label>

                                <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Discount Rate"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="invoicedescription" className="sr-only">Invoice Description</label>

                                <div className="relative">
                                <textarea
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Invoice Description"
                                    rows={4}
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="buyername" className="sr-only">Buyer Name</label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Buyer Name"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="buyercontact" className="sr-only">Buyer Contact</label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Buyer Contact"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="buyeraddress" className="sr-only">Buyer Address</label>

                                <div className="relative">
                                <textarea
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Buyer Address"
                                    rows={4}
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label className="text-sm font-medium text-gray-600">Invoice Date</label>

                                <div className="relative">
                                <input
                                    type="date"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label className="text-sm font-medium text-gray-600">Invoice Due Date</label>

                                <div className="relative">
                                <input
                                    type="date"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                />
                                </div>
                            </div>


                            </div>

                            <div>
                            <h3 className="font-medium text-lg text-gray-900">
                                Other Information
                            </h3>

                            <div className='pt-4'>
                                <label for="suppliername" className="sr-only">Supplier Name</label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Supplier Name"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="suppliercontact" className="sr-only">Supplier Contact</label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Supplier Contact"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="supplieraddress" className="sr-only">Supplier Address</label>

                                <div className="relative">
                                <textarea
                                    type="text"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Supplier Address"
                                    rows={4}
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="repaymentplan" className="sr-only">Repayment Plan</label>

                                <div className="relative">
                                <select className="w-full bg-gray-50 focus:outline-gray-100 rounded-md bg-transparent border-none p-4 pe-12 text-sm sm:text-sm">
                                <option value="">Select payment plan</option>
                                <option value="upfront">Upfront</option>
                                <option value="2 installment">2 installment</option>
                                <option value="3 installment">3 installment</option>
                                </select>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="insuranceprovider" className="sr-only">Insurance Provider</label>

                                <div className="relative">
                                <select className="w-full bg-gray-50 focus:outline-gray-100 rounded-md bg-transparent border-none p-4 pe-12 text-sm sm:text-sm">
                                <option value="">Select insurance provider</option>
                                <option value="enterprise">Enterprise</option>
                                <option value="glico">Glico</option>
                                </select>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <label for="insuredamount" className="sr-only">Insured Amount</label>

                                <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 focus:outline-gray-100 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Insured Amount"
                                />
                                </div>
                            </div>

                            <div className='pt-4'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insurance Coverage
                                    </label>

                                    <p className='mt-1'>
                                    <label className="text-sm text-gray-500">
                                        Start date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>

                                    <p className='mt-1'>
                                    <label className="text-sm text-gray-500">
                                        End date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full h-8 focus:outline-none rounded-md bg-transparent border-none ps-4 text-sm sm:text-sm"
                                    />
                                    </p>
                                </div>

                                <div className='pt-8'>
                                <div className='flex justify-end'>
                                    <a
                                    className="flex cursor-pointer rounded border border-emerald-600 bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                                    Submit Invoice
                                    </a>
                                    </div>

                                </div>

                            </div>
                
                        </div>
                        
                      )
                  } 

                
                </form>

            </ReactModal>


            <div className="m-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            
              
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8">
              <div className="pt-4 text-gray-500">

              <span className="flex w-fit p-4 rounded-lg bg-emerald-600">
              <FaExclamation className=' text-white lg:w-5 lg:h-5' />
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                All Invoice Factoring
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF INVOICE FACTORING
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
                All Trade Finance
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                  TOTAL NUMBER OF TRADE FINANCE
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
                  All Invoice Financing
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                TOTAL NUMBER OF INVOICE FINANCING
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

                <form className='mx-4'>
                <input
                        type="text"
                        className="w-full rounded-lg bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter invoice number"
                    />
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
                QUANTITY
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                PRICE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                DISCOUNT RATE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INVOICE DATE
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                INVOICE DUE DATE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                BUYER NAME
                </th>
                <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                BUYER CONTACT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                BUYER ADDRESS
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURANCE PROVIDER
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURED AMOUNT
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                INSURANCE COVERAGE
                </th>
                <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                Tokenization
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
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
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

                <p className="whitespace-nowrap text-sm">Tokenize</p>
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

                    <form className='mx-4'>
                    <input
                        type="text"
                        className="w-full rounded-lg bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter invoice number"
                    />
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
                        QUANTITY
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        PRICE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        DISCOUNT RATE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INVOICE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        INVOICE DUE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        BUYER NAME
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        BUYER CONTACT
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        BUYER ADDRESS
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURANCE PROVIDER
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURED AMOUNT
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURANCE COVERAGE
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
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
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

                    <form className='mx-4'>
                    <input
                        type="text"
                        className="w-full rounded-lg bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter invoice number"
                    />
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
                        QUANTITY
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        PRICE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        DISCOUNT RATE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INVOICE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        INVOICE DUE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        BUYER NAME
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        BUYER CONTACT
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        BUYER ADDRESS
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURANCE PROVIDER
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURED AMOUNT
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INSURANCE COVERAGE
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
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                    </tr>

                    </tbody>
                </table>
                </div>
                    </div>


                        <div className='m-5 my-12 border grid grid-cols-1 rounded-md shadow-md'>

                        <div className='flex px-8 py-2'>
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                            All Tokenized Assets
                        </h3>

                        <form>
                            <select
                                className="w-full rounded-lg mx-8 bg-emerald-50 border-gray-200 p-4 pe-12 text-sm shadow-sm">
                                <option value="all">All</option>
                                <option value="selling">Selling</option>
                                <option value="reselling">Reselling</option>
                                <option value="delisted">Delisted</option>
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
                        QUANTITY
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        PRICE
                        </th>
                        <th className="whitespace-nowrap px-4 text-sm text-gray-400">
                        INVOICE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        INVOICE DUE DATE
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        DETAILS
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
                        <a 
                        href='/tokenizationsingle'
                        className="group cursor-pointer relative inline-block overflow-hidden border border-emerald-600 px-4 py-0.5 focus:outline-none focus:ring">
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-emerald-600 transition-all group-hover:w-full group-active:bg-emerald-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-emerald-600 transition-colors group-hover:text-white"
                        >
                            View
                        </span>
                        </a>
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

export default Supplier
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'

function Tokenizationsingle() {

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <div className='m-8'>

        <div>
            <a 
            onClick={handleGoBack}
            className="inline-block cursor-pointer rounded-full border border-emerald-600 bg-emerald-600 p-3 text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">

            <FaArrowCircleLeft className='lg:w-5 lg:h-5' />
            </a>
        </div>
        
        <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-6">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                        <header>
                            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Asset Brook</h2>

                            <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                            </p>
                        </header>

                        
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <li>
                            <a className="block group p-4 rounded-lg bg-gray-100">
                            

                            <div className="">
                                <h3 className="font-medium text-lg text-gray-900">
                                Basic Information
                                </h3>
                                <hr />

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Number
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        #ASGHS007
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Amount
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        $150
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Quantity
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        80
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Unit Price
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        $1.875
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Discount Rate
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        8%
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Date
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        01-08-2023
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Invoice Due Date
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        18-08-2023
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Name of Supplier
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        John Doe
                                    </p>
                                </div>


                                <div className='mt-2 mb-6'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Contact of Supplier
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        +233 574 499 701
                                    </p>
                                </div>


                                
                            </div>
                            </a>
                        </li>

                        <li>
                        <a className="block group p-4 rounded-lg bg-gray-100">
                            

                            <div className="">
                                <h3 className="font-medium text-lg text-gray-900">
                                Other Information
                                </h3>
                                <hr />

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                      Supplier Address
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        GE-4133-9755, Accra, Ghana.
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Name of Buyer
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        John Doe
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Contact of Buyer
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        +233 574 499 701
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Buyer Address
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        GE-4133-9755, Accra, Ghana.
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Repayment Plan
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        2 installment
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insurance Provider
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        Enterprise
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insured Amount
                                        <hr />
                                    </label>

                                    <p className="text-sm text-gray-700">
                                        $120
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <label className="text-sm font-medium text-gray-600">
                                        Insurance Coverage
                                        <hr />
                                    </label>

                                    <p className='mt-1'>
                                    <label className="text-sm text-gray-500">
                                        Start date
                                    </label>
                                    <p className="text-sm text-gray-700">
                                        10-07-2023
                                    </p>
                                    </p>

                                    <p className='mt-2'>
                                    <label className="text-sm text-gray-500">
                                        End date
                                    </label>
                                    <p className="text-sm text-gray-700">
                                        31-08-2023
                                    </p>
                                    </p>
                                </div>


                                
                            </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>

                <section>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-6">
                    <div className='border grid grid-cols-1 rounded-md shadow-md'>

                        <div className='flex px-8 py-2'>
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                            Previous Owners
                        </h3>
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
                        CONTACT
                        </th>
                        <th className="whitespace-nowrap px-4 ext-sm text-gray-400">
                        ADDRESS
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
                        
                        </tr>



                        </tbody>
                        </table>
                        </div>


                        </div>

                    </div>
                </section>
    </div>
  )
}

export default Tokenizationsingle
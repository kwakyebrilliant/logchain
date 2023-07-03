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
        
        Tokenizationsingle
    </div>
  )
}

export default Tokenizationsingle
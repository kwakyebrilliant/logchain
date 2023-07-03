import React from 'react'
import { FaLinode } from 'react-icons/fa'

const Logo = () => {
  return (
    <nav className='border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
                <div className='flex items-center'>
                    <FaLinode className=' text-emerald-600 lg:w-[35px] lg:h-[35px]' />
                    <span className='text-xl font-medium whitespace-nowrap'>
                        LOGCHAIN.
                    </span>
                </div>

        </nav>
  )
}

export default Logo
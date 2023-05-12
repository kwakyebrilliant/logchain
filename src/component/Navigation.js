import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaHospitalSymbol } from 'react-icons/fa'

export default function Navigation() {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    return (

        <div className='w-screen h-[70px] z-10 bg-emerald-600 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <FaHospitalSymbol className=' text-white lg:w-[35px] lg:h-[35px]' />
          <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>LOGCHAIN.</h1>
          <ul className='hidden text-white md:flex'>
          <li><Link to="/">Home</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
         
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-emerald-600 bg-white border border-white rounded hover:bg-transparent hover:text-white active:text-white focus:outline-none focus:ring"
            type="submit"
            href='/login'
            >
            <span className="text-sm font-medium">
            Connect
            </span>
            </a>
    
       
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="/" onClick={handleClose}>Home</Link></li>

        <div className='my-4'>
        
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-emerald-700 border border-emerald-700 rounded hover:bg-transparent hover:text-emerald-700 active:text-black focus:outline-none focus:ring"
            href='/login'
            type="submit"
            >
            <span className="text-sm font-medium">
            Connect
            </span>
            </a>
        </div>
      </ul>
    </div>
    );
}

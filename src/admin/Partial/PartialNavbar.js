import React, { useState } from 'react'

import {  AiOutlineLogout, AiOutlineArrowDown, AiOutlineArrowUp, AiFillPieChart } from 'react-icons/ai'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';



const PartialNavbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    const [dropdown, setdropdown] = useState(false)
    
    const handleClick2 = () => setdropdown(!dropdown)

    const handleClose2 =()=> setdropdown(!dropdown)
    

  return (
    <nav className='bg-white shadow-sm border-gray-200 mx-2 px-2 py-2.5 rounded'>
            <div className='container flex justify-between items-center mx-auto'>

            <div className='md:hidden' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-black' /> : <XIcon className='w-5 text-black' />}

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-900 w-fit px-8 h-screen'}>
                <li className='border-zinc-900 w-fit text-white'><Link to="/adminsummary" className='flex' onClick={handleClose}><AiFillPieChart className='text-2xl mr-4' />Summary</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/manager" className='flex' onClick={handleClose}><AiFillPieChart className='text-2xl mr-4' />Manager</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/manufacturer" className='flex' onClick={handleClose}><AiFillPieChart className='text-2xl mr-4' />Manaufacturer</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/tester" className='flex' onClick={handleClose}><AiFillPieChart className='text-2xl mr-4' />Tester</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/transporter" className='flex' onClick={handleClose}><AiFillPieChart className='text-2xl mr-4' />Transporter</Link></li>
            </ul>
          
            </div>
                <div className='flex items-center mx-auto'>
                </div>

                <div className='flex justify-end pt-4'>

                <svg
                                className="max-w-full fill-current mt-1 text-gray-900"
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill="#00000"
                                fill-rule="evenodd"
                                d="M23.6408156,14.9046858 C22.0378949,21.3339956 15.5260763,25.2467873 9.09601649,23.6434916 C2.66858193,22.0405708 -1.24420981,15.5283772 0.359460996,9.09944253 C1.96163164,2.66938268 8.47345019,-1.24378409 14.9016348,0.359136628 C21.3313196,1.96205735 25.2437363,8.47500102 23.6408156,14.9046858 L23.6408156,14.9046858 Z M17.2913894,10.2916945 C17.5302898,8.69477443 16.3144103,7.83630799 14.6518582,7.263622 L15.1911657,5.1003916 L13.8744004,4.77223165 L13.3493445,6.87845598 C13.0031826,6.79219679 12.6476448,6.71081312 12.2943571,6.63017953 L12.8231635,4.51007873 L11.5071483,4.18191878 L10.9674658,6.3443991 C10.6809353,6.27914215 10.3996553,6.21463528 10.1266263,6.14675305 L10.1281264,6.14000233 L8.31218301,5.68657903 L7.9618957,7.09297883 C7.9618957,7.09297883 8.93887476,7.31687767 8.91824756,7.33075415 C9.45155436,7.46389333 9.54793963,7.81680592 9.53181291,8.09658572 L8.91749748,10.5609732 C8.9542514,10.5703492 9.00188147,10.5838506 9.05438706,10.6048529 C9.01050739,10.5939767 8.96362739,10.5819754 8.91524724,10.5703492 L8.05415553,14.0225919 C7.98889858,14.1846091 7.82350596,14.427635 7.45071626,14.3353752 C7.46384266,14.3545022 6.49361432,14.0964747 6.49361432,14.0964747 L5.8399197,15.6037603 L7.5534772,16.0309308 C7.87226116,16.1108143 8.18466943,16.1944482 8.49220218,16.2732066 L7.94726915,18.4611896 L9.26253423,18.7893496 L9.80221671,16.624619 C10.161505,16.7221294 10.5102921,16.812139 10.8515785,16.896898 L10.3137712,19.0515025 L11.6305364,19.3796624 L12.1754695,17.1958048 C14.4208336,17.6207251 16.1092634,17.4493318 16.8199641,15.4184905 C17.3926501,13.7833164 16.7914611,12.8400909 15.6100853,12.2250254 C16.4704269,12.0266293 17.1184959,11.460694 17.2913894,10.2916945 L17.2913894,10.2916945 Z M14.2828189,14.5105188 C13.8759006,16.145693 11.1227324,15.2617238 10.2301373,15.0400752 L10.9532143,12.1413915 C11.8458094,12.3641652 14.7081142,12.8052122 14.2828189,14.5105188 L14.2828189,14.5105188 Z M14.6901123,10.268067 C14.3188228,11.7554754 12.0273287,10.9997699 11.2839995,10.8145002 L11.9395694,8.18547018 C12.6828985,8.37073991 15.0767785,8.71652674 14.6901123,10.268067 L14.6901123,10.268067 Z"
                                />
                            </svg>
                            
                            <div onClick={handleClick2}>
                                {!dropdown ? <AiOutlineArrowDown className='w-5 cursor-pointer mt-3 text-black' /> : <AiOutlineArrowUp className='w-5 mt-3 cursor-pointer text-black' />}

                                <ul className={!dropdown ? 'hidden' : 'absolute right-12 mt-2 bg-zinc-900 px-8'}>
                                    <li className='border-zinc-900 w-fit text-white'>0xF...y6b</li>
                                    <li className='border-zinc-900 w-fit text-white'><Link to="/" className='flex' onClick={handleClose2}><AiOutlineLogout className='text-2xl mr-4' />Logout</Link></li>
                                </ul>
                            
                                </div> 
                    
                
                </div>
            </div>
        </nav>
  )
}

export default PartialNavbar
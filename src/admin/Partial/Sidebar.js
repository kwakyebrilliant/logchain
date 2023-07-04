import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { FaHospitalSymbol } from 'react-icons/fa'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'Manager', path: '/manager', src: <AiFillPieChart /> },
        { title: 'Transporter', path: '/transporter', src: <AiFillPieChart /> },
        { title: 'Pharmacy', path: '/pharmacy', src: <AiFillPieChart /> },
        { title: 'Dispatcher', path: '/dispatcher', src: <AiFillPieChart /> }
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative duration-300 bg-black border-r border-gray-200 p-5`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/adminsummary'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                    <FaHospitalSymbol className=' text-emerald-600 lg:w-[35px] lg:h-[35px]' />
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                LOGCHAIN.
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-green-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar

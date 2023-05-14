import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

function Manager() {
  return (
    <div className='text-black'>
        <>
        
        <div className='flex flex-auto'>
            <Sidebar />

            <div className='grow'>
                <PartialNavbar />
                


            </div>

        </div>
        
        </>
    </div>
  )
}

export default Manager
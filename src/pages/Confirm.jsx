import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Confirm = () => {
  return (
    <div className='w-[40%] mx-auto text-center mt-40'>

        <div className='flex items-center justify-center text-9xl text-blue-900'>
            <IoIosCheckmarkCircle />
        </div>

        <div className='py-4'>
            <div className='sm:text-xl text-base font-medium'>Your order has been successfully placed</div>
            <div className='sm:text-xl text-base font-medium'>It will reach you by tomorrow evening</div>
        </div>
        
        <div className='text-xl font-bold pb-6'>ThankYou for shopping!</div>

        <NavLink to="/">
            <button className='bg-blue-800 text-white py-3 px-7 mb-4 rounded-lg font-semibold text-lg border-2 border-blue-900 hover:bg-white hover:text-blue-800 duration-300'>Continue</button>
        </NavLink>
    </div>
  )
}

export default Confirm;
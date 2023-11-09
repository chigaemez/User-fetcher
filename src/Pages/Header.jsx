import React from 'react'
import { images } from '../assets'

const Header = () => {
  return (
    <div className='bg-sky-500 w-full justify-between h-[8vh] flex items-center pl-[30px] py-10 '>
      <img
        src={images}
        alt=''
        className='w-[10%] md:w-[4%]'
      />

      <div className="flex">

      </div>
    </div>
  )
}

export default Header

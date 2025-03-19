import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";


function Button({Live="Get Started"}) {
  return (
    <div className='font-[santoshi-Bold] py-1 justify-between text-black px-3 bg-white w-30 flex gap-2 items-center text-black rounded-2xl mt-1'>
        <span className='text-sm mt-1'>{Live}</span><MdOutlineSubdirectoryArrowRight />
      
    </div>
  )
}

export default Button

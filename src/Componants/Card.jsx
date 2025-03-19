import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card({width,start,para,hover="false"}) {
   
  return (
    <motion.div    whileHover={{ backgroundColor: hover===true && "rgb(139, 92, 246)",padding:"25px" }} 
   className={`bg-neutral-800  ${width} rounded-xl p-5 `}  >
        <div className='w-full flex justify-between'>
            <h3 className='font-[santoshi] text-zinc-200'>One heading</h3>
            <FaArrowRight className="text-white" />

        </div>
        <div className='mt-15'>
           <h1 className='text-3xl  font-[santoshi] text-zinc-200'>whatever heading </h1>
            </div>

            <div className='mt-40'>
            {
  start === true ? (
    <>
      <h1 className='text-5xl font-bold font-[santoshi-Bold] tracking-tight leading-none text-zinc-200'>
        Start a Project
      </h1>
      <button className='rounded-full py-2 px-5 mt-5 border-1 text-zinc-200 border-zinc-100'>
        Contact Us
      </button>
    </>
  ) : null
}

            {
                para===true?(<><p className='text-zinc-500 mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet.</p>
                    
                    </>):null
            }
       

       </div>
        
        
      
    </motion.div>
  )
}

export default Card

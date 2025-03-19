import React, { useState } from 'react'
import Button from './Button'

function Product({T1,T2,Color,Live,Case,mover,count}) {
   const Color1 = 'rgb(143, 147, 77)'
   const [hovered,sethovored]=useState(false);
   const val=false;

   
  return (
    <div onMouseEnter={()=>{
      mover(count)
      sethovored(true)}} onMouseLeave={()=>sethovored(false)} style={{backgroundColor: hovered ?Color:'transparent'}} className={`w-full text-zinc-200 h-50 bg-transperent h-[20rem]  flex justify-between px-7 items-center`}>
      <div className={`w-full text-zinc-200 h-50 bg-transperent h-[20rem]  flex justify-between px-7 items-center`}>
      <div className='w-3/4 px-30'>
        <h1 className='font-semibold text-[6vh]'>{T1}</h1>
        
        </div>
        <div className='w-[30vw]  flex flex-col  ml-20  gap-10 '>
            <p className='py-1'>{T2}</p>
            <div className='flex justify-between'>
            {Live && <Button Live={"Get Started"}/>}
            {Case && <Button Live={"Case Study"}/>}
            </div>
            
        </div>
        

        

      </div>
      
      
    </div>
  )
}

export default Product

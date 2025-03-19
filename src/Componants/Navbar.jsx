import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className=' max-w-screen-xl mx-auto p-3 bg-neutral-950  text-zinc-200 border-b-[1px] border-zinc-700  '>

        <div className='flex justify-between px-5'>
        <div className='flex w-1/2 justify-between'>
            <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg'/>
        <nav className='links ml-20 font-[santoshi-Bold]'>
            <ul className='flex gap-20  '>
                {["Home","Work","Carrers","","News"].map((elem,index)=>{
                    return <a className=' justify-center  items-center  flex items-center gap-2' >
                      
                      {index===1 && <span
  className="inline-block w-2 h-2 bg-green-500 rounded-full 
             shadow-[0_0_8px_#00FF19] outline outline-2 outline-green-400"
></span>
} {elem.length===0 && <span className='inline-block w-0.5 bg-zinc-200 opacity-50 rounded h-8'></span>}
                        {elem}
                    </a> 
                })}
               
            </ul>
        </nav>
        </div>
        <div>
            <Button/>
        </div>

        </div>
       
        
        
      
    </div>
  )
}

export default Navbar

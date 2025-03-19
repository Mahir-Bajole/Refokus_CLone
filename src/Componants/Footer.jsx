import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl bg-neutral-950 mx-auto h flex gap-20'>
        <div className='w-1/2 text-zinc-200'>
            <h1 className=' font-semibold text-[12rem] tracking-tight'>refokus.</h1>
        </div>
        <div className='flex'>
        <div className='w-1/2  px-10 py-10'>
            <h1 className='text-zinc-300 mb-5 font-medium text-xl'>Social</h1>
            {
                 ["Instagram","Twitter","Facebook","Google"].map((item,index)=>{
                    return <p key={index} className='py-1 text-zinc-400'>{item}</p>
                })

            }
           
        </div>
        <div className='w-1/2  px-10 py-10'>
            <h1 className='text-zinc-300 mb-5 font-medium text-xl'>Social</h1>
            {
                 ["Instagram","Twitter","Facebook","Google"].map((item,index)=>{
                    return <p key={index} className='py-1 text-zinc-400'>{item}</p>
                })

            }
           
        </div>
        <div className='mt-10 w-50 flex flex-col items-end gap-5'>
            <p className='text-zinc-200 tracking-tight text-sm text-end  '>
instagram
twitter (x?)
LinkedIn
Refokus is pioneering digital agency driven by design and empowered by technology.</p>
<img className='w-30 ' src='https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg'></img>
        </div>



        </div>
        
      
    </div>
  )
}

export default Footer

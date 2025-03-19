import React from 'react'

function Stripe({Url,Num}) {
    
    console.log(Url, Num)
   
  return (
    <div className='bg-neutral-950 w-80 text-zinc-200 py-4 p-5 flex justify-between px-5 border border-1 border-zinc-700 mb-10'>
        <img src={Url}
         alt='image'/>
        <h1>{Num}</h1>
      
    </div>
  )
}

export default Stripe

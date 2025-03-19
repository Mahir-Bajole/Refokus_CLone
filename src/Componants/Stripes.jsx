import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var min = 1;
    var max = 100;
    
    const getrandome = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const data = [
      { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", num: 2 },
      { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", num: getrandome(min, max) },
      { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", num: getrandome(min, max) },
      { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", num: getrandome(min, max) },
      { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", num: getrandome(min, max) }
    ];
    return (
    <div className='mb-20  bg-neutral-950 flex mt-20'>
      {
        data.map((item,index)=> <Stripe Url={item.url} Num={item.num} key={index}/>)
      }
    </div>
  )
}

export default Stripes

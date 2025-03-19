import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';


function Products() {

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 128); // Random value between 0 and 127
        const g = Math.floor(Math.random() * 128);
        const b = Math.floor(Math.random() * 128);
       
        return `rgb(${r}, ${g}, ${b})`; // Generate a dark color
    };
    const data=[{t1:"Arqitel",t2:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",color:getRandomColor(),live:true,case:false},{t1:"TTR",t2:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",color:getRandomColor(),live:true,case:false},{t1:"YIR 2022",t2:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",color:getRandomColor(),live:true,case:false},{t1:"Yahoo!",t2:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",color:getRandomColor(),live:true,case:true},{t1:"Rainfall",t2:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",color:getRandomColor(),live:true,case:false}]
  console.log(data)
  const [pos,setpos]=useState(20);
  const mover=(val)=>{
    setpos(val*20);

  }
    return (
       <div className='relative'>
       {data.map((item,index)=>{
            return  <div  className='w-full h-full '>
            <div className='  mx-auto p-3  flex flex-col'>
                <Product mover={mover} count={index} key={index} T1={item.t1} Live={item.live} Case={item.case} T2={item.t2} Color={item.color}/>
              
            </div>
            
           
            </div>
             

        })
       }
       <div className='absolute top-0 w-full h-full  pointer-events-none'>
       <motion.div initial={{y:pos}} transition={{ease:[0.76, 0, 0.24, 1],duration:.3}} animate={{y:pos+'rem'}} className='window absolute  h-[20rem] rounded-3xl overflow-hidden w-[30rem] left-[36%] bg-white mt-3 -translate-x-[10%]    top-0'>
        
      
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.2}} animate={{y:-pos+'rem'}} className='w-full h-full  '>
        <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    
    </motion.div>
    <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.2}}  animate={{y:-pos+'rem'}} className='w-full h-full  '>
    <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>

    <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.2}} animate={{y:-pos+'rem'}} className='w-full h-full  '>
    <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>
    <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.2}}  animate={{y:-pos+'rem'}} className='w-full h-full  '>
    <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>

    <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.2}} animate={{y:-pos+'rem'}} className='w-full h-full '>
    <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>



</motion.div>

       </div>
     
      
       </div>
  )
}

export default Products

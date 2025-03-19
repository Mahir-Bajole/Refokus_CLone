import React, { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion';



function Work() {

 


        const [images,setimages]=useState([
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"36%",left:"41%",isActive:false},
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"33%",left:"39%",isActive:false},
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"40%",left:"45%",isActive:false},
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"32%",left:"37%",isActive:false},
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"43%",left:"52%",isActive:false},
            {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"45%",left:"43%",isActive:false}]);
        const { scrollYProgress } = useScroll();

       scrollYProgress.on("change",(data)=>{
        function imageshow(arr){
            setimages(prev =>(
                prev.map((item,index)=>(
                    arr.indexOf(index)===-1 ?({ ...item,isActive:false}):{...item,isActive:true}
                ))
            ))

        }
           
        
           
          
       
       
          
        
          switch(Math.floor(data*100)){
            case 0:
                imageshow([]);
                break;

                case 1:imageshow([1]);
                    break;
                    
                    case 2:imageshow([1,2]);
                        break;

                        case 3:imageshow([1,2,3]);
                            break;

                            case 4:imageshow([1,2,3,4]);
                                break;
                                case 5:imageshow([1,2,3,4,5]);
                                    break;
                                    case 6:imageshow([1,2,3,4,5,6]);
                                        break;

          
        }
    })


  return (
    <div className='w-full px-4 py-2 bg-neutral-950'>
        <div className='relative max-w-screen-xl  mx-auto'>
            <h1 className='text-[30vw] text-center select-none font-mediumbold tracking-tight text-zinc-200'>Work</h1>
            <div className='absolute top-20 w-full h-2/3 '>
            {
                images.map((image,index)=>{
                    return image.isActive&& <img className='w-60 rounded absolute mx-auto' key={index} src={image.url} style={{top:image.top,left:image.left}} />
                })
            }
            </div>
        </div>
        
      
    </div>
  )
}

export default Work


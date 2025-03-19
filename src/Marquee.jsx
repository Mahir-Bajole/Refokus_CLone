import { motion } from "framer-motion";
import React from "react";

function Marquee({ img1,direction }) {
  return (
    <div className="flex w-full overflow-hidden flex-col space-y-5">
   
      <motion.div
      initial={{ x: direction === "left" ? "0%" : "-100%" }} 
      animate={{ x: direction === "left" ? "-100%" : "0%" }} 
      
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40 whitespace-nowrap"
      >
        {[...img1, ...img1].map((url, index) => (
          <img src={url} key={`first-${index}`} className="w-40 h-auto" alt={`logo-${index}`} />
        ))}
      </motion.div>

      
     
    </div>
  );
}

export default Marquee;

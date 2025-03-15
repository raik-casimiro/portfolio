"use client"; 

import { motion } from "framer-motion";
import ConsoleTextAnimation from "./consoleTextAnimation";
import { FaRegWindowMaximize } from "react-icons/fa";

export default function Console() {
  return (
    <div className="flex w-full select-none items-center justify-center shadow-2xl">
      <div className="flex flex-col md:w-[600px] min-w-[400px] h-[400px] md:h-[500px] bg-black text-white rounded-lg shadow-lg relative">
        <div className="absolute top-2 left-2 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="flex justify-center items-center bg-muted space-x-2 text-white rounded-t-lg">
          <FaRegWindowMaximize size={14}/>
          <span className="text-lg">terminal</span>
        </div>

        <span className="inline h-full w-full p-3 text-lg font-mono overflow-y-auto overflow-x-hidden">
            <span className="flex flex-col text-md font-mono text-muted-foreground">
                <span className="hidden md:block">
                  raik-Macbook-Pro-2 ~ % sudo apt-get developer
                </span>
                <span>
        
                  <span>raik-Macbook-Pro-2 ~ % </span> 
                  <ConsoleTextAnimation />
                   
                  <motion.div
                      animate={{ opacity: [0, 0, 1, 1] }}
                      transition={{
                        duration: .5,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: .5,
                      }}
                      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-500"
                  />
                </span>
            </span>
        </span>
      </div>
    </div>
  );
}

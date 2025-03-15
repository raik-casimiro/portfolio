'use client'

import Console from './_components/Console';
import React from 'react';
import { motion } from 'framer-motion'; 
import Image from 'next/image';

export default function Home() {

  return (
    <div className="flex flex-col md:flex-row h-screen"> 
      <div className="flex flex-1"> 
        <motion.main className="flex justify-around items-center flex-wrap w-full flex-1 text-white overflow-y-auto"> 
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center relative"
          >
            
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full opacity-15 bg-radial from-highlight/40 from-20% to-80% to-transparent"
            src="/hexagon.svg"
            alt="Hexagon background image"
            width={0}
            height={0}
            priority={true}
          />

          <div className="container z-20 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">
              Ready to build something amazing?
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-left">
              I&apos;m currently available for freelance work and full-time opportunities. Let&apos;s discuss how I can help bring
              your ideas to life with robust, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-foreground border hover:text-black hover:bg-foreground bg-transparent p-2 rounded-xl flex items-center cursor-pointer transition-all duration-200">
                Projects
              </button>
              <button className="hover:bg-muted-foreground bg-foreground text-slate-900 p-2 rounded-xl flex items-center cursor-pointer transition-all duration-200">
                About me
              </button>
            </div>
          </div>
          </motion.div> 

          <motion.section
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Console />
          </motion.section> 
        </motion.main>
      </div>
    </div>
  );
}
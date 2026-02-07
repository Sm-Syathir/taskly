"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'
import { Jost } from 'next/font/google'
import { motion } from "motion/react"

const inter = Inter({ 
  subsets: ['latin'],
  weight: '500'
})

const Josti = Jost({
  subsets: ['latin'],
  weight: '500'
})

const Navbar = () => {
  return (
   <>
<div className="mx-auto bg-[#252525] w-300 h-18 mt-8 rounded-2xl shadow-2xl relative">
  <div className="flex items-center justify-between h-full px-6">
    <motion.h1 
       initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      className={`text-white ${Josti.className} text-[22px]`}
    >
      Taskly
    </motion.h1>
    

    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <h1 className="text-white relative group cursor-pointer">
          Dashboard
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <h1 className="text-white relative group cursor-pointer">
          Features
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <h1 className="text-white relative group cursor-pointer">
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </h1>
      </motion.div>
    </div>
    

    <motion.div 
    
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative"
      >
        <Button className='text-white'>Sign In</Button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative"
      >
        <Button className='bg-orange-600 text-white hover:bg-orange-700'>Get Started</Button>
      </motion.div>
    </motion.div>
  </div>
</div>
</>
  )
}

export default Navbar
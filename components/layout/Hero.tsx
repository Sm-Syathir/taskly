"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <div className="mx-auto pt-35 flex flex-col items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-5xl md:text-6xl font-bold text-center max-w-5xl relative z-10"
      >
        Transform Your Ideas into{' '}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative inline-block"
        >
          <span className="text-orange-600">Productivity</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 text-xl text-center max-w-3xl text-gray-600 relative z-10"
      >
        Welcome to Taskly, where your ideas come to life. Join us to transform
        your thoughts into impactful products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button className='bg-orange-600 text-white w-[250px] h-[50px] rounded-xl text-lg relative overflow-hidden group'>
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              Transform Your Ideas Now
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button variant="outline" className='border-2 border-orange-600 text-orange-600 w-[200px] h-[50px] rounded-xl text-base relative overflow-hidden group'>
            <motion.div
              className="flex items-center justify-center gap-2 relative z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Watch Demo
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-orange-600/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-30"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-1/4 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-1/4 w-3 h-3 border-2 border-orange-300 rounded-full opacity-50"
      />
    </div>
  )
}
import React from 'react'

export const Background = () => {
  return (
    <div className="absolute inset-0 -z-2 overflow-hidden">
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[700px] rounded-full 
        bg-gradient-to-br from-orange-300 via-orange-300 to-orange-500 
        opacity-40 blur-3xl">
      </div>
    </div>
  )
}

"use client"
import { motion } from 'motion/react'
import React from 'react'

const FileSvg = () => {
  return (
    <div className="flex justify-center items-center p-10 ">
      <SvgFile />     
    </div>
  )
}

export default FileSvg

export const SvgFile = () => {
  return (
    <div className='relative w-64 h-48 group cursor-pointer' 
      style={{ perspective: "1000px" }}>
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 160" 
        width="100%" 
        height="100%"
        initial="rest"
        whileHover="hover"
      >
        <defs>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.25" />
          </filter>
          
          <linearGradient id="frontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#333333" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
        </defs>

        <g filter="url(#shadow)">
          {/* Back Flap */}
          <path d="M 20,60
                   A 10,10 0 0,1 30,50
                   L 112,50
                   L 122,38
                   A 6,6 0 0,1 127,35
                   L 170,35
                   A 10,10 0 0,1 180,45
                   L 180,130
                   A 10,10 0 0,1 170,140
                   L 30,140
                   A 10,10 0 0,1 20,130
                   Z" fill="#151515" />

          {/* Tabs */}
          <rect x="135" y="40" width="18" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />
          <rect x="158" y="40" width="6" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />
          
          {/* Sheet popping up */}
      <motion.g
            variants={{
              rest: { y: 0 },
              hover: { y: -25 } 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Paper Path - UPDATED: Pure white for better contrast with writing */}
            <path d="M 30,75 L 48,56 A 6,6 0 0,1 52,54 L 165,54 A 5,5 0 0,1 170,59 L 170,130 L 30,130 Z" 
              fill="#ffffff" 
            />

            {/* NEW: Writing on the paper */}
            <text x="60" y="80" fontFamily="monospace" fontSize="8" fill="#333" fontWeight="bold">invoice_99.pdf</text>
            <text x="60" y="92" fontFamily="system-ui" fontSize="7" fill="#666">Created: 2024-05-15</text>
            <text x="60" y="102" fontFamily="system-ui" fontSize="7" fill="#666">Status: <tspan fill="#2e7d32">Paid</tspan></text>
            
            {/* Faux code/text lines */}
            <rect x="60" y="112" width="90" height="2" rx="1" fill="#ddd" />
            <rect x="60" y="118" width="70" height="2" rx="1" fill="#ddd" />
          </motion.g>
          <motion.g 
        
            style={{ 
              transformOrigin: "center 140px", // This acts as the "hinge" at the bottom of the folder
            }}
            variants={{
              rest: { rotateX: 0 },
              hover: { rotateX: 35 } // Rotates the flap forward/downward in 3D space
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Front Flap Base */}
            <path d="M 20,85
                     A 6,6 0 0,1 24,80
                     L 45,67
                     A 8,8 0 0,1 50,65
                     L 170,65
                     A 10,10 0 0,1 180,75
                     L 180,130
                     A 10,10 0 0,1 170,140
                     L 30,140
                     A 10,10 0 0,1 20,130
                     Z" fill="url(#frontGradient)" />

            {/* Front Flap Highlight Line */}
            <path d="M 24,80
                     L 45,67
                     A 8,8 0 0,1 50,65
                     L 170,65
                     A 10,10 0 0,1 179,74"
                  fill="none" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"/>

            {/* Text */}
            <text x="30" y="125" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10.5" fill="#a0a0a0" fontWeight="500">
              FOLDER
            </text>
          </motion.g>

        </g>
      </motion.svg>
    </div>
  )
}
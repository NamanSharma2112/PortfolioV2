"use client";


import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import Image from "next/image";
import { transform } from "next/dist/build/swc/generated-native";
import { useScroll } from "motion/react";
import { useTransform } from "motion/react";

export const Scroll = () =>  {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
    });
    const rotateX = useTransform(scrollYProgress, [0, 0.1], [20, 0]);
  
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 200]);
const scaleText = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
const opacityText = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);
const blur = useTransform(scrollYProgress, [0, 0.1], [0, 5]);
const blurFilter = useMotionTemplate`blur(${blur}px`;
return  <div ref={containerRef} className="h-[400vh] w-full bg-neutral-100 flex flex-col items-center py-60 [perspective:800px] [transform-style:preserve-3d]">
  <motion.h1 style={{scale:scaleText
, opacity:opacityText,
  filter: blurFilter
  }} className="text-4xl font-bold text-neutral-800">Unlesh the power of 
    <br/>Scroll animation
    </motion.h1>  
    <motion.div 
    style={{
        rotateX: rotateX,
        translateZ:'100px',
        y: translateY,
        }    }
    className="w-1/2 rounded-3xl  -mt-4 h-[450px] bg-white p-2  shadow-2xl  border-neutral-100">
    <div className="bg-black h-full w-full rounded-[16px] p-2">
        <div className="bg-neutral-100 h-full w-full rounded-[12px]">
            <Image src="https://assets.aceternity.com/linear-demo.webp" alt="demo" className="h-full w-full "
            height={1024}
            width={1024}
            
            />
        </div>
    </div>
</motion.div>
    </div>
};
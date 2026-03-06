"use client";


import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal,
} from "@tabler/icons-react";

import { motion, useMotionValue, useTransform, MotionValue, useSpring, AnimatePresence } from "motion/react";
import Link from "next/link";

type LinkType = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export const Floating = () => {
  const links: LinkType[] = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <IconTerminal className="h-full w-full text-neutral-500" />,
      href: "/products",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500" />,
      href: "/components",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500" />,
      href: "/changelog",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500" />,
      href: "https://twitter.com/nextui_org",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
      href: "#",
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className="fixed bottom-10 rounded-2xl inset-x-0 mx-auto flex items-center justify-center gap-4 px-4 bg-neutral-100 w-fit h-16"
    >
      {links.map((el) => (
        <IconContainer mouseX={mouseX} key={el.title} el={el} />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  el,
  mouseX,
}: {
  el: LinkType;
  mouseX: MotionValue<number>;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  
  const width = useSpring(widthTransform, { mass:0.1, stiffness: 150, damping: 12 });
  const height = useSpring(widthTransform, { mass:0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthIconTransform, { mass:0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(widthIconTransform, { mass:0.1, stiffness: 150, damping: 12 });

  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href={el.href}
      onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
      <motion.div
        ref={ref}
        style={{
           width,
          height: height,
        }}
        className="flex relative items-center justify-center bg-neutral-200 rounded-full"
      > <AnimatePresence>
        {isHover && <motion.div initial={{opacity:0, y:10, x:'-50%'}} animate={{opacity:1,y:0,x:"-50%"}} exit={{opacity:0,y:2,x:'-50%'}} transition={{duration:0.2}} className="absolute text-xs left-1/2 -translate-x-1/2 -top-8 px-2 py-0.5 whitespace-pre-wrap bg-neutral-100 rounded-md text-neutral-500">{el.title}</motion.div>}
        </AnimatePresence>
        <motion.div
        style={{
            width: widthIcon,
            height:heightIcon
        }
        }
        className="flex items-center justify-center">
        {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};

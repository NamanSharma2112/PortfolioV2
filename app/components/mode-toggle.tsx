'use client';
import React from "react";
import { Sun, Moon } from "./theme";
import { useTheme } from "next-themes";

export const ModeToggle = () => {   
const {theme, setTheme} = useTheme();


    return( <button onClick={()=> setTheme(theme === "light" ? "dark":"light")} className="absolute flex items-center justify-center top-4 right-4 cursor-pointer">    
 <Sun />
 <Moon />
    </button>
);}
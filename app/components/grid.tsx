import React from "react";
import { cn } from "../libs/utils";
export const Grid =() => {  
    
    
    return (
        <div className="max-w-5xl py-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen" >
            <div className="grid grid-cols-2">
               </div>
            </div>
            )}



const cards = ({className, childern}:
{className?: string, childern: React.ReactNode}
) => {
    return (
        <div className={cn(className, "p-4 border  bg-white")}>            
        </div>
    )
}

const CardTitle = ({className, childern}:
{className?: string, childern: React.ReactNode}
) => { 
    return (
        <h2 className={cn(className, "text-lg font-bold")}>
            {childern}
        </h2>
    )
}
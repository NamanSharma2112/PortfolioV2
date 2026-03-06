"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


export const Bento = () =>  {
    return <div className="grid grid-cols-2 gap-12 max-w-4xl ms-auto">
        {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                    <Image src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" width={48} height={48}/>
                    <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
        ))}
    </div>
};















const testimonials = [
    {
        name: "John Doe",
        title: "CEO of Acme Corp",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "This product has revolutionized our workflow and increased our productivity by 300%!"
    },  {
        name: "Jane Smith",
        title: "CTO of Beta Inc",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        quote: "The intuitive design and powerful features have made this an indispensable tool for our team."
    },  {
        name: "Alice Johnson",
        title: "Product Manager at Gamma LLC",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        quote: "I can't imagine going back to our old processes after using this product. It's a game-changer!"
    },  {
        name: "Bob Brown",
        title: "Lead Developer at Delta Co",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "The seamless integration and robust performance have exceeded our expectations in every way."
    } ,{
        name: "Emily Davis",
        title: "Marketing Director at Epsilon Ltd",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        quote: "Our marketing campaigns have seen a significant boost in engagement and conversions thanks to this product."    
    }
];    

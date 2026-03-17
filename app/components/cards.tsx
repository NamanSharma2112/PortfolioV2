import React from 'react'

const Cards = () => {
 const cards = [
  {
    title: "Working Knowledge",
    description: "Practical skills and insights gained from hands-on experience that drive real-world problem solving.",
    skeleton: <></>,
    className: '',
    config: {
      x: 0,
      y: 0,
      zIndex: 1,
      rotate: -15,
    },
  },
  {
    title: "Technical Expertise",
    description: "Deep proficiency in modern technologies and frameworks, enabling efficient development and innovation.",
    skeleton: <></>,
    className: '',
    config: {
      x: 50,
      y: 20,
      zIndex: 2,
      rotate: 0,
    },
  },
  {
    title: "Creative Solutions",
    description: "Innovative approaches to complex challenges, blending creativity with technical precision.",
    skeleton: <></>,
    className: '',
    config: {
      x: 100,
      y: -10,
      zIndex: 3,
      rotate: 15,
    },
  },
  {
    title: "Collaborative Teamwork",
    description: "Strong communication and synergy in team environments to deliver high-impact projects.",
    skeleton: <></>,
    className: '',
    config: {
      x: -30,
      y: 40,
      zIndex: 4,
      rotate: -10,
    },
  },
  {
    title: "Continuous Learning",
    description: "Commitment to staying ahead with emerging trends and evolving best practices.",
    skeleton: <></>,
    className: '',
    config: {
      x: 80,
      y: -30,
      zIndex: 5,
      rotate: 10,
    },
  },
 ]

  return (
    <div className="relative w-full h-125 overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute inset-0 m-auto w-80 h-64 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50 transition-all duration-500 hover:scale-105 hover:z-10 ${card.className}`}
          style={{
            left: `${card.config.x}px`,
            top: `${card.config.y}px`,
            zIndex: card.config.zIndex,
            transform: `rotate(${card.config.rotate}deg)`,
          }}
        >
          {card.skeleton}
          <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
          <p className="text-gray-700 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards


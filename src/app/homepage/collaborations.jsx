'use client';

import Image from 'next/image';
import { useState } from 'react';

const Collaborations = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logos = [
    { src: '/panduit.png', alt: 'Panduit' },
    { src: '/xtralis.png', alt: 'Xtralis' },
    { src: '/phoenix.png', alt: 'Phoenix Contact' },
    { src: '/partex.png', alt: 'Partex' },
    { src: '/hellermann.png', alt: 'HellermannTyton' },
    { src: '/ideal.png', alt: 'Ideal' },
    { src: '/app.png', alt: 'APP' },
    { src: '/allied.png', alt: 'Allied Connectors' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Collaborations
        </h2>
        <div 
          className="overflow-hidden relative whitespace-nowrap group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`inline-flex space-x-10 transition-transform duration-500 ${isHovered ? 'animate-marquee-paused' : 'animate-marquee'}`}
          >
            {[...logos, ...logos].map((item, index) => (
              <div 
                key={index} 
                className="border-2 border-gray-300 h-32 w-48 flex justify-center items-center shadow-lg rounded-lg bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Collaborations;
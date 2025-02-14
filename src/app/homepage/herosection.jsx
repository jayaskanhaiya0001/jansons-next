import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
};

const slides = [
    {
        id: 1,
        image: "/hero1.webp",
        title: "Powering Innovations",
        extraTitle: "Electrifying Possibilities",
        subtitle: "Your Trusted Partner in Electrical & Electronic Solutions!",
    },
    {
        id: 2,
        image: "/hero-2.webp",
        title: "Powering Innovations",
        extraTitle: "Electrifying Possibilities",
        subtitle: "Step outside your comfort zone",
    },
    {
        id: 3,
        image: "/hero-3.webp",
        title: "Powering Innovations",
        extraTitle: "Electrifying Possibilities",
        subtitle: "Experience the world like never before",
    },
];

const HeroSlider = () => {
    return (
        <div className="relative w-full h-screen mt-10 mb-10 px-10 overflow-hidden">
            <Slider {...settings} className="h-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="relative w-full h-screen">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Animated Text */}
                        <div className="absolute  top-0 flex flex-col left-0  text-white py-5  bg-white px-6 md:max-h-96 md:h-full  justify-center rounded-br-2xl">
                            <button className=" bg-[#f2f2f2] px-5 py-2 rounded-[20px] w-max text-black">Electro Webstore</button>
                            <motion.h1
                                className="text-2xl md:text-6xl font-bold text-black"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.h1
                                className="text-2xl md:text-6xl font-bold text-[#880909]"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {slide.extraTitle}
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-lg md:text-xl text-black"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            >
                                {slide.subtitle}
                            </motion.p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};



const HeroSection = () => {
    return (
        <section>
            <HeroSlider />
        </section>
    );
};

export default HeroSection;
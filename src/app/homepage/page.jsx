"use client";

import HeroSection from "./herosection"
import Products from "./products";
import Contact from "./contact";
import Clients from "./clients";
import Collaborations from "./collaborations";
import Stats from "./stats";
import AboutUs from "./About";
import Footer from "@/component/footer/footer";

const Homepage = () => {


    return (
        <div>
            <HeroSection />
            <AboutUs />
            <Products />
            <Stats />
            <Collaborations />
            <Clients />
            <Contact />
            <Footer />
            {/* Type-1-removebg-preview.png */}
            {/* Screenshot_2022-05-06_132134-removebg-preview1.png */}
        </div>

    )
}

export default Homepage;
"use client"

import { useEffect } from "react";
import HeroSection from "./homepage/herosection";
import Products from "./homepage/products";
import Contact from "./homepage/contact";
import Clients from "./homepage/clients";

import Collaborations from "./homepage/collaborations";
import Stats from "./homepage/stats";
import AboutUs from "./homepage/About";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

import Head from 'next/head';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const Home = () => {
  return (
    <div>
      <Head>
        {/* ✅ Load Font Awesome globally */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha384-XdS9HDbvxEsGdX90DQ6wsFXsmRbjZ0SwbM3Se1jpAzslU3H/6p2VdpWnCwAfcvQU"
          crossOrigin="anonymous"
        />
      </Head>
      <ScrollToTop />
      <Header />
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
  );
};

export default Home;

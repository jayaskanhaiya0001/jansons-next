"use client"

import Header from "@/component/header/header";
import { useEffect } from "react"
import Hero from "../Hero";
import Collaborations from "../Collaborations";
import Quote from "@/component/form/quote";
const CollaborationPage = () => {
    const ScrollToTop = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      };
      
    return (
        <>
        <ScrollToTop />
        <Header />
            <Hero />
            <Collaborations />
            <Quote />
        </>

    )
}

export default CollaborationPage;
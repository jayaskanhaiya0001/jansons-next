"use client"
import React, { useEffect } from "react";
import Quote from "../../component/form/quote";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

const DownloadPage = () => {
  const handleDownload = (url) => {
    const pdfUrl = url; // Replace with your actual PDF URL
    window.open(pdfUrl, "_blank"); // Opens in a new tab
  };
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  };
  return (
    <div className="bg-white font-sans">
      <ScrollToTop />
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-[url('/download-banner.png')] h-[400px] flex items-center justify-center text-white"
      >
        <div className="overlay"></div>
        <h1 className=" text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
          Wiring the Future, Energizing Today.
        </h1>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center sm:text-left mb-4">More About Us</h2>
        <p className="text-gray-700 leading-relaxed text-lg sm:text-xl text-center sm:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        {/* Download Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {[
            { title: "Company Catalogue", path: "/Vector.png", url: "https://jainsons-v1.s3.ap-south-1.amazonaws.com/JAINSONS++Catlogue+2024.pdf" },
            { title: "Company Profile", path: "/profile.png", url: "https://jainsons-v1.s3.ap-south-1.amazonaws.com/JAINSONS+Profile+and+Product+Range+(2).pdf" },
            // { title: "Ideal Catalogue", path: "/idealcatalogue.png" }
          ].map((data, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="text-red-600 text-5xl mb-4">
                <img
                  src={data.path}
                  alt={data.title}
                  className="mx-auto h-32 sm:h-40 md:h-48 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300" onClick={() => handleDownload(data.url)}>
                Download ↓
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-[#880909] text-white py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">
              <img src="/service.png" className=" mx-auto" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#EDCD1F]">Industry-Grade Quality</h4>
            <p>Precision-engineered for unmatched performance and reliability.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">
              <img src="/cutting.png" className=" mx-auto" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#EDCD1F]">Cutting-Edge Technology</h4>
            <p>Empowering innovation with the latest in electrical technology.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 ">
              <img src="/quick-support.png" className=" mx-auto" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#EDCD1F]">Quick Support</h4>
            <p>
              Contact us at +91-98******* <br />
              Timings: Mon to Sat 10 AM - 5 PM
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/* Quote Form */}
      <Quote />
      {/* <section className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex justify-center items-center bg-white">
          <div className="w-full max-w-2xl p-8 shadow-lg border rounded-lg">
            <h3 className="text-xl font-bold text-center mb-6">
              Tell us what you need, and we'll help you get quotes
            </h3>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <label htmlFor="product" className="text-sm font-medium md:min-w-32">I want quotes for</label>
                <select id="product" className="border rounded-lg p-2 flex-1 w-full">
                  <option>Cable Ties</option>
                  <option>Electrical Components</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <label htmlFor="phone" className="text-sm font-medium md:min-w-32">Mobile Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="border rounded-lg p-2 flex-1 w-full"
                  placeholder="+91 Enter your mobile"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <label htmlFor="email" className="text-sm font-medium md:min-w-32">Email ID</label>
                <input
                  id="email"
                  type="email"
                  className="border rounded-lg p-2 flex-1 w-full"
                  placeholder="Enter your mail id"
                />
              </div>
              <div className="flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-[#880909] text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Jainsons Logo"
              className="w-32 mb-4"
            />
            <p className="text-sm">
              Corporate Office: C-5, Community Center, Naraina Vihar, New Delhi-110028 (India)
            </p>
            <p className="text-sm">📞 8447012326, 9873664653</p>
            <p className="text-sm">✉️ sales@jainsonsindia.net</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Subscribe to our newsletter</h4>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-l-lg focus:ring-2 focus:ring-red-400"
              />
              <button className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-black">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-6 text-sm">© Jain Sons India - All Rights Reserved.</p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default DownloadPage;

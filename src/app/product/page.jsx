"use client";

import ProductCard from "./ProductCard";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Quote from "../../component/form/quote";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

const productData1 = [
  {
    images: [
      "https://via.placeholder.com/600x300?text=Product+1+Image+1",
      "https://via.placeholder.com/600x300?text=Product+1+Image+2",
      "https://via.placeholder.com/600x300?text=Product+1+Image+3",
    ],
    title: "Product 1",
    material: "Cotton",
    size: "Medium",
  },
  {
    images: [
      "https://via.placeholder.com/600x300?text=Product+2+Image+1",
      "https://via.placeholder.com/600x300?text=Product+2+Image+2",
      "https://via.placeholder.com/600x300?text=Product+2+Image+2",
    ],
    title: "Product 2",
    material: "Leather",
    size: "Large",
  },
  {
    images: [
      "https://via.placeholder.com/600x300?text=Product+3+Image+1",
      "https://via.placeholder.com/600x300?text=Product+3+Image+2",
      "https://via.placeholder.com/600x300?text=Product+3+Image+3",
    ],
    title: "Product 3",
    material: "Wood",
    size: "Small",
  },
];

const category = [];

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

const ProductAndService = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const getAllCategory = async () => {
    try {
      const response = await axios.get(
        "https://jainsons-pvt.vercel.app/api/categories/showAll"
      );
      if (response.data) {
        setCategories(response.data?.data);
      } else {
      }
    } catch (error) {
      // setErrorMsg("Error logging in. Please check your credentials.");
    } finally {
      // setLoading(false);
    }
  };

  const fetchProducts = async (category) => {
    const url = new URL("https://jainsons-pvt.vercel.app/api/product/search");
    setIsLoading(true);
    url.searchParams.append("category", category);
    try {
      const response = await axios.get(url);

      if (response.data && response.data.data) {
        setProducts(response.data.data);
        setIsLoading(false);
      } else {
        throw new Error("No product data found!");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://jainsons-pvt.vercel.app/api/product/getAll"
        );

        if (response.data && response.data.data) {
          setProducts(response.data.data);
        } else {
          throw new Error("No product data found!");
        }
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    getAllCategory();
  }, []); // Empty dependency array ensures this runs only once

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false); // State to toggle between show all or first 5 items

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
      name: Yup.mixed(),
    }),
    onSubmit: async (values, { setSubmitting }, event) => {
      setSubmitting(true);

      const { email, mobile, subject, message } = values;
      const formData = {
        email,
        mobile,
        subject,
        message,
      };

      try {
        // Send data to the API
        const response = await axios.post(
          "https://jainsons-pvt.vercel.app/api/contactUs",
          formData
        );
        // Success message
        if (response.status === 200 || response.status === 201) {
          toast.success("Message sent successfully!", {
            autoClose: 5000,
            position: "top-center",
          });
          formik.resetForm();
        } else {
          toast.error("Error sending message", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending message");
      } finally {
        setSubmitting(false); // Optionally, stop the submitting indicator
      }
      event.preventDefault();
    },
  });

  const displayedData = showAll ? products : products.slice(0, 6);

  const scrollToSection = () => {
    const section = document.getElementById("next-section"); // Get the target section by id
    section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  };

  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="relative bg-[url('/download-banner.png')] h-[300px] flex items-center justify-center text-center">
        <div className="overlay-marron  "></div>
        <h1 className="text-white   font-bold text-3xl md:text-4xl z-50">
          Powering Innovation,
          <br />
          Electrifying Possibilities
        </h1>
      </div>
      <section className=" container mx-auto">
        <h3 className="text-xl font-bold px-6 mt-12 mb-6 ">Category</h3>

        <div className="flex flex-wrap gap-4 px-6 ">
          {categories?.map((data, index) => (
            <button
              className={`bg-[${data?._id === isSelected ? "#880909" : "#EBEBEB"
                }] hover:bg-[#880909] ${data?._id === isSelected ? "text-[#fff]" : "text-black"
                } hover:text-white  py-2 px-4 rounded-full transition duration-300 ease-in-out`}
              onClick={() => {
                fetchProducts(data?._id);
                setIsSelected(data?._id);
              }}
              key={index}
            >
              {data?.name}
            </button>
          ))}
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* <div className="flex items-center justify-start pl-4  w-full max-w-md mb-6">
                        <input
                            type="text"
                            placeholder="Search Category"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                        />
                    </div> */}
          <h2 className="text-2xl font-bold mb-6 pl-4">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
            {displayedData?.map((product, index) => (
              <ProductCard
                key={index}
                images={product.imageURLs}
                name={product.name}
                feature={product.features}
              />
            ))}
          </div>
          {products?.length > 6 && (
            <div className=" flex w-full justify-center">
              <button
                className="mt-4 bg-[#EDCD1F] text-black font-bold rounded-full px-6 py-2 transition-all hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={toggleShowAll}
              >
                {showAll ? "See Less" : "See All"}
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="container mx-auto px-4 pb-12">
        <div className="relative rounded-lg bg-[to-100%,to-100%] bg-cover bg-bottom bg-no-repeat bg-[url('/product-bottom-banner.png')]  h-[400px] flex flex-col md:flex-row items-center justify-center text-center">
          <div className=" w-full md:w-1/2 text-center md:text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white  ">
              Electrical Components
              <br />
              {/* <span className="text-yellow-400"></span> */}
            </h2>
            <p className="mt-3 text-gray-300 italic text-sm md:text-lg">
              All Needed Components in one place
            </p>
            <button
              className="mt-4 bg-[#880909] rounded-full text-white px-4 py-2"
              onClick={scrollToSection}
            >
              Shop Now
            </button>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
            <img
              src="/semiconductor-collection-electrical-components-chip-capacitor-microchip-processor-battery-resistor-vector.jpg"
              alt="Arduino"
              className="w-60 md:w-60 lg:w-96 h-56 transform rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section id="next-section">
        <Quote />
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 pl-4">
            Recently viewed products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
            {products
              ?.slice(-3)
              ?.reverse()
              ?.map((product, index) => (
                <ProductCard
                  key={index}
                  images={product.imageURLs}
                  name={product.name}
                  feature={product.features}
                />
              ))}
          </div>
        </div>

        {products?.length > 3 && (
          <div className=" flex w-full justify-center">
            <button className="mt-4 bg-[#EDCD1F] text-black font-bold rounded-full px-6 py-2 transition-all hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              See All
            </button>
          </div>
        )}
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 pl-4">
            Products you may like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
            {products
              ?.slice(-3)
              ?.reverse()
              ?.map((product, index) => (
                <ProductCard
                  images={product.imageURLs}
                  name={product.name}
                  key={index}
                  feature={product.features}
                />
              ))}
          </div>
        </div>
        {products?.length > 3 && (
          <div className=" flex w-full justify-center">
            <button className="mt-4 bg-[#EDCD1F] text-black font-bold rounded-full px-6 py-2 transition-all hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              See All
            </button>
          </div>
        )}
      </section>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8  rounded-lg p-6">
          {/* Left Side */}
          <div className="md:pl-200">
            <h2 className="text-3xl font-bold mb-6 text-left">
              Corporate Office
            </h2>
            <p className="text-gray-700 mb-2 text-left">
              C-5, Community Center, Naraina Vihar, <br />
              New Delhi-110028 (India)
            </p>
            <p className="text-gray-700 font-medium text-left">
              sales@jainsonsindia.net
            </p>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-left">Contact Us</h2>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📧
                    </span>
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your Phone
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      name="mobile"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📞
                    </span>
                    {formik.touched.mobile && formik.errors.mobile && (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.mobile}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-left text-[#880909] font-bold mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Write Subject"
                    className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    📝
                  </span>
                </div>
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.subject}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-left text-[#880909] font-bold mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    placeholder="Write Message.."
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    rows="4"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    ✉️
                  </span>
                </div>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#880909] text-white font-bold py-3 px-4 rounded-[40px] hover:bg-red-700 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <Footer />
      {isLoading && <Loader />}
    </div>
  );
};

export default ProductAndService;

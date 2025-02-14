import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Quote from "../../component/form/quote";
import { useParams } from "next/navigation";
import Footer from "@/component/footer/footer";

const logos = [
  { src: 'panduit.png', alt: 'Panduit' },
  { src: 'xtralis.png', alt: 'Xtralis' },
  { src: 'phoenix.png', alt: 'Phoenix Contact' },
  { src: 'partex.png', alt: 'Partex' },
  { src: 'hellermann.png', alt: 'HellermannTyton' },
  { src: 'ideal.png', alt: 'Ideal' },
  { src: 'app.png', alt: 'APP' },
  { src: 'hummel.png', alt: 'Hummel' },
  { src: 'allied.png', alt: 'Allied Connectors' },
];
const CollaborationAbout = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      mobile: '',
      category: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
        .required('Mobile number is required'),
      category: Yup.string().required('Please select a category'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }, event) => {
      setSubmitting(true);
      try {
        const response = await axios.post('https://jainsons-pvt.vercel.app/api/quotes/add', values);

        if (response.status === 200) {
          toast.success('Request submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
          resetForm();
        } else {
          toast.error('Error submitting request', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        }
      } catch (error) {
        toast.error('Failed to submit request. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      } finally {
        setSubmitting(false);
      }
      event.preventDefault()
    },

  });
  const id = useParams().id
  return (
    <div className="font-sans text-gray-800">


      {/* Collaboration Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto text-left">
          <img src={`/${logos[id]?.src}`} alt="HellermannTyton" className="mb-6 w-64" />
          <p className="text-lg leading-relaxed">
            HellermannTyton is a leading manufacturer and supplier of products for fastening, fixing, installing, connecting, insulating, protecting and identifying electrical cables and
            data network infrastructure. Hellermann Tyton develops parts for customer-specific
            industrial applications.
            <br />
            <br />
            HellermannTyton operate 16 world-class manufacturing facilities and develop products at 13 locations. More than 5,400 employees work at HellermannTyton in 39 countries and offer you first-class service and advice – wherever you need it.
            <br />
            <br />
            HellermannTyton as a global brand is trusted by industry professionals around the world. The quality of HellermannTyton products is inspired by your cable management needs.
            HellermannTyton’s expertise and spirit shape their pioneering activities.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#880909] text-white font-semibold rounded-full hover:bg-red-700 transition">
            Know More
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" py-6 md:py-12 bg-white px-6">
        <div className="container mx-auto text-left">
          <h2 className="text-2xl font-bold mb-3 md:mb-6">Why Choose Us</h2>
          <p className="mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          {/* <div className="grid grid-cols-3 gap-10 ">
            {[
              { title: "Convenience of Buying", icon: "🛒" },
              { title: "Competitive Quotes", icon: "💬" },
              { title: "1000+ Buyers", icon: "👥" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-[#880909]">{item.title}</h3>
              </div>
            ))}
          </div> */}
          <div className="bg-[url('/about-collab.png')] min-h-16 md:min-h-60   bg-contain bg-no-repeat bg-top">

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-yellow-100 mx-6 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 p-6 bg-[url('/oc-2.png')] h-[500px] bg-cover bg-no-repeat rounded-lg">
            <h3 className="text-xl font-semibold">Workstation Essentials</h3>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
              Explore Now
            </button>
          </div>
          <div className="w-full lg:w-1/2 text-white rounded-lg flex flex-col gap-4">
            <div className="bg-[#880909] flex items-center justify-center min-h-[240px] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center">Powering Innovation,<br /> Electrifying Possibilities</h3>
            </div>
            <div className="bg-[url('/about-collaboration.png')] bg-cover bg-no-repeat h-[240px] p-6 rounded-lg"></div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      {/* <section className="container mx-auto py-16 px-4 md:px-8">
        <div className=" flex justify-center items-center bg-white">
          <div className="w-full mx-auto md:w-1/2  p-8 shadow-lg border rounded-lg">
            <h3 className="text-xl font-bold text-center mb-6">
              Tell us what you need, and we'll help you get quotes
            </h3>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="flex items-center gap-10">
                <label htmlFor="product" className="text-sm font-medium min-w-32">I want quotes for</label>
                <select
                  id="category"
                  name="category"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                >
                  <option>Cable Ties</option>
                  <option>Electrical Components</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="phone" className="text-sm font-medium min-w-32">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="+91 Enter your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="email" className="text-sm font-medium min-w-32">Email ID</label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="Enter your mail id"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className=" flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-[#880909] text-white max-w-max px-6 py-3 rounded-[40px] hover:bg-red-700 transition-colors"
                  disabled={formik.isSubmitting}
                >

                  {formik.isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      <Quote />
      <Footer />
    </div>
  );
};

export default CollaborationAbout;

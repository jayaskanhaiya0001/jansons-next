"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quote = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await axios.get(
          "/api/categories/showAll"
        );
        if (response.data) {
          setCategories(response.data?.data);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    getAllCategory();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      category: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      category: Yup.string().required("Please select a category"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        const response = await axios.post(
          "/api/quotes/add",
          values
        );
        if (response.status === 200) {
          toast.success("Request submitted successfully!", {
            position: "top-center",
            autoClose: 5000,
          });
          resetForm();
        } else {
          toast.error("Error submitting request", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      } catch (error) {
        toast.error("Failed to submit request. Please try again.", {
          position: "top-right",
          autoClose: 5000,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="container mx-auto py-16 px-4 md:px-8">
      <div className="flex justify-center items-center bg-white">
        <div className="w-full mx-auto md:w-5/12 p-8 shadow-lg border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-6 text-[#880909]">
            Tell us what you need, and we'll help you get quotes
          </h3>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-start md:flex-row md:items-center w-full md:gap-10">
              <label htmlFor="category" className="text-sm font-medium min-w-32">
                I want quotes for
              </label>
              <select
                id="category"
                name="category"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="">Select a category</option>
                {categories?.map((data, index) => (
                  <option key={index} value={data?._id}>{data?.name}</option>
                ))}
              </select>
            </div>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-xs mt-1 text-right">
                {formik.errors.category}
              </div>
            )}

            <div className="flex flex-col items-start md:flex-row md:items-center w-full md:gap-10">
              <label htmlFor="mobile" className="text-sm font-medium min-w-32">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                placeholder="Enter your mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
            </div>
            {formik.touched.mobile && formik.errors.mobile && (
              <div className="text-red-500 text-xs mt-1 text-right">
                {formik.errors.mobile}
              </div>
            )}

            <div className="flex flex-col items-start md:flex-row md:items-center w-full md:gap-10">
              <label htmlFor="email" className="text-sm font-medium min-w-32">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                placeholder="Enter your mail id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs mt-1 text-right">
                {formik.errors.email}
              </div>
            )}

            <div className="flex justify-center md:justify-end w-full">
              <button
                type="submit"
                className="bg-[#880909] text-white text-sm md:text-lg max-w-max px-3 py-1 md:px-6 md:py-3 rounded-[40px] hover:bg-red-700 transition-colors"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;
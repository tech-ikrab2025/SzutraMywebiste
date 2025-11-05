import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {containerVariants, itemVariants } from "../Components/Whatsapp";
import axios from "axios";
const ContactUs = () => {
  const DARK_GOLD_HEX = "#cfa866";
  const PRIMARY_ACCENT_HEX = "#f7b733";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phoneno: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
      name: "",
      phoneno: "",
      email: "",
      message: "",
    });

  // ✅ Handle name input (only alphabets + max 3 spaces)
  const handleNameChange = (e) => {
    let value = e.target.value;

    // Remove non-alphabetic characters (except spaces)
    value = value.replace(/[^A-Za-z ]/g, "");

    // Limit to 3 spaces total (4 words max)
    const spaceCount = (value.match(/ /g) || []).length;
    if (spaceCount > 3) {
      const parts = value.split(" ").filter(Boolean);
      value = parts.slice(0, 4).join(" ");
    }
    setFormData({ ...formData, name: value });    
  };

  // ✅ Handle mobile input (only 10 digits, must start with 6–9)
  const handleMobileChange = (e) => {
    let value = e.target.value;

    // Remove all non-digits
    value = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (value.length > 10) value = value.slice(0, 10);

    // Enforce start with 6–9 if any value exists
    if (value && !/^[6-9]/.test(value)) {
      value = "";
    }

    setFormData({ ...formData, phoneno: value });
  };

  // Handle email/message normally
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

// 🧠 Client-side validation
    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phoneno)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }
try {
    const res = await axios.post("https://sutrawebiste.onrender.com/api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": "A5A38fg7R28A8771E13Q",
        },
        
      });
    toast.success("Your inquiry has been submitted successfully!");
    
          // Optional: Reset form after submission
          setFormData({
            name: "",
            phoneno: "",
            email: "",
            message: "",
          });
        } catch (error) { 
          console.log(error);   
          toast.error("Failed to send message. Please try again later.");
        }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#fcfaf7] py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16 mt-10" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold text-[#1b2e4e] sm:text-6xl" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
            Get in <span className="text-[#cfa866]">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto tracking-wider" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
            We're here to answer your questions and discuss how our collective
            ventures can support your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 1: Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-xl shadow-2xl"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#a5864e]" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  required
                  placeholder="Enter your full name"
                  autoComplete="off"
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#cfa866]"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  id="mobile"
                  value={formData.phoneno}
                  onChange={handleMobileChange}
                  required
                  placeholder="Enter 10-digit mobile number"
                  autoComplete="off"
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${
                    errors.phoneno ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#cfa866]"
                  }`}
                />
                {errors.phoneno && <p className="text-red-500 text-sm mt-1">{errors.phoneno}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  autoComplete="off"
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#cfa866]"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  autoComplete="off"
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#cfa866]"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                              type="submit"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition duration-200 ${
                                Object.values(errors).some((err) => err !== "")
                                  ? "bg-blue-400 cursor-not-allowed"
                                  : `bg-[#cfa866] hover:bg-[#cfa866]`
                              }`}
                              disabled={Object.values(errors).some((err) => err !== "")} style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}
                            >
                              Submit Enquiry
                            </motion.button>
            </form>
          </motion.div>

          {/* Section 2: Contact Info (unchanged) */}
          {/* ... existing contact info and address code ... */}
       <div className="lg:col-span-1 space-y-8">
            {/* Contact Info Card */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#cfa866]"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#a5864e] mb-4" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
                Contact Details
              </h3>
              <div className="space-y-4 text-gray-600" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
                <p>
                  📧 <strong className="text-[#1b2e4e]">Email:</strong>
                  <br /> salesone@ikrabesol.in
                </p>
                <p>
                  📞 <strong className="text-[#1b2e4e]">Phone:</strong>
                  <br /> +91 - 8016082014
                </p>
                <p>
                  🕒 <strong className="text-[#1b2e4e]">Hours:</strong>
                  <br /> Mon - Sat: 10:30 AM - 7:00 PM (EST)
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#cfa866]"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#a5864e] mb-4" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
                Main Office (Kolkata Branch)
              </h3>
              <p className="text-gray-600" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
                364, Shantipally, Rajdanga, 
                <br />
                Kasba, South 24 Parganas,
                <br />
                Kolkata-700107
                <br />
                West Bengal, India.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#cfa866]"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#a5864e] mb-4" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
              Branch Office (Siliguri Branch)
              </h3>
              <p className="text-gray-600" style={{
            fontFamily: "Playfair Display, Georgia, serif",
            wordSpacing: "5px",
          }}>
                2nd Floor, Strong enclave,
                <br />
                 Iskcon Mandir Road,
                <br />
                Siliguri-734001, 
                <br />
                West Bengal, India.
              </p>
            </motion.div>
          </div>
        </div>
        {/* ✅ Add ToastContainer at the bottom */}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
      </div>
    </motion.div>
  );
};

export default ContactUs;
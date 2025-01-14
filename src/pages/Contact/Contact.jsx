// src/pages/Contact/Contact.jsx
"use client";
import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const [touchedFields, setTouchedFields] = useState({});

  const services = [
    "Personal Care",
    "Companionship",
    "Palliative Care",
    "Appointment / Outing Support",
    "Support for Individuals With Special Needs",
    "Respite Care",
    "Palliative Care",
    "Careers",
    "Others",
  ];

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    setTouchedFields({ ...touchedFields, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setTouchedFields({ ...touchedFields, [e.target.name]: true });
  };

  // Form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "69307b5a-e77f-41bb-9bfd-789353e9e7cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Message Sent",
          text: "Thank you for contacting us. We will get back to you soon!",
          icon: "success",
        });
        form.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          service: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an error submitting your message. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Error", error);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting your message. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Description Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-700 font-medium">
            Your family's home care journey is important to us. Whether you're
            exploring care options for yourself or a loved one, our
            compassionate team is here to guide you through our services,
            financing options, and personalized care plans.
          </p>

          <div className="my-8 mx-4 md:mx-10">
            <div className="bg-blue-200 rounded-lg shadow-lg p-5">
              <p className="text-gray-800 font-medium mb-4">
                Contact us directly:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="tel:14036303717"
                  className="flex items-center gap-3 text-orange-600 hover:text-red-600 transition-colors group w-full md:w-auto justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="font-semibold">(403) 630-3717</span>
                </a>
                <a
                  href="mailto:info@familycareexperts.com"
                  className="flex items-center gap-3 text-orange-600 hover:text-red-600 transition-colors group w-full md:w-auto justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <span className="font-semibold break-words">
                    info@familycareexperts.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-700 font-medium">
            Or fill out the form below, and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    ${
                      touchedFields.name
                        ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                        : ""
                    }`}
                  />
                  <p
                    className={`mt-1 text-red-600 text-sm ${
                      touchedFields.name && !formData.name
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    Please enter your name
                  </p>
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    ${
                      touchedFields.email
                        ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                        : ""
                    }`}
                  />
                  <p
                    className={`mt-1 text-red-600 text-sm ${
                      touchedFields.email && !formData.email
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    Please enter a valid email address
                  </p>
                </div>

                {/* Phone Input */}
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="123-456-7890"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    ${
                      touchedFields.phone
                        ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                        : ""
                    }`}
                  />
                  <p
                    className={`mt-1 text-red-600 text-sm ${
                      touchedFields.phone && !formData.phone
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    Please enter your phone number
                  </p>
                </div>

                {/* City Input */}
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Calgary"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    ${
                      touchedFields.city
                        ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                        : ""
                    }`}
                  />
                  <p
                    className={`mt-1 text-red-600 text-sm ${
                      touchedFields.city && !formData.city
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    Please enter your city
                  </p>
                </div>
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  What Can We Help You With? *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  ${
                    touchedFields.service
                      ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                      : ""
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <p
                  className={`mt-1 text-red-600 text-sm ${
                    touchedFields.service && !formData.service
                      ? "visible"
                      : "invisible"
                  }`}
                >
                  Please select a service
                </p>
              </div>

              {/* Message Input */}
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Please provide details about your inquiry..."
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  ${
                    touchedFields.message
                      ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50"
                      : ""
                  }`}
                ></textarea>
                <p
                  className={`mt-1 text-red-600 text-sm ${
                    touchedFields.message && !formData.message
                      ? "visible"
                      : "invisible"
                  }`}
                >
                  Please enter your message
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

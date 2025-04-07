// src/pages/Resources/Careers/ApplicationForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ApplicationForm = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    allowCommunication: false,
    referredBy: "",
  });

  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    setTouchedFields({ ...touchedFields, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setTouchedFields({ ...touchedFields, [e.target.name]: true });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "69307b5a-e77f-41bb-9bfd-789353e9e7cf");
    formData.append("subject", `Job Application: ${jobTitle}`);

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
          title: "Application Submitted",
          text: "Thank you for your application. We will review it and contact you soon!",
          icon: "success",
        });
        form.reset();
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          allowCommunication: false,
          referredBy: "",
          resume: null,
          coverLetter: null,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an error submitting your application. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Error", error);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting your application. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Apply Now - {jobTitle}</h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <p className="text-blue-800">
          <span className="font-semibold">Important Note:</span> Please send your resume to{" "}
          <a 
            href="mailto:info@familycareexperts.com" 
            className="text-orange-500 hover:text-orange-600 underline"
          >
            info@familycareexperts.com
          </a>
          {" "}with the subject line "Application for {jobTitle}" before or after submitting this application form. Thank you!
        </p>
      </div>


      <form onSubmit={onSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
                ${touchedFields.firstName ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50" : ""}`}
            />
            <p className={`mt-1 text-red-600 text-sm ${
              touchedFields.firstName && !formData.firstName ? "visible" : "invisible"
            }`}>
              Please enter your first name
            </p>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Doe"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
                ${touchedFields.lastName ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50" : ""}`}
            />
            <p className={`mt-1 text-red-600 text-sm ${
              touchedFields.lastName && !formData.lastName ? "visible" : "invisible"
            }`}>
              Please enter your last name
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="johndoe@example.com"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
                ${touchedFields.email ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50" : ""}`}
            />
            <p className={`mt-1 text-red-600 text-sm ${
              touchedFields.email && (!formData.email || !formData.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))
                ? "visible"
                : "invisible"
            }`}>
              Please enter a valid email address
            </p>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="123-456-7890"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
                ${touchedFields.phone ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50" : ""}`}
            />
            <p className={`mt-1 text-red-600 text-sm ${
              touchedFields.phone && (!formData.phone || !formData.phone.match(/^\d{3}-\d{3}-\d{4}$/))
                ? "visible"
                : "invisible"
            }`}>
              Please enter a valid phone number (format: 123-456-7890)
            </p>
          </div>
        </div>

        {/* Address Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="123 Main St"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
          </div>

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
                ${touchedFields.city ? "valid:border-green-500 invalid:border-red-500 invalid:bg-red-50" : ""}`}
            />
            <p className={`mt-1 text-red-600 text-sm ${
              touchedFields.city && !formData.city ? "visible" : "invisible"
            }`}>
              Please enter your city
            </p>
          </div>
        </div>

        {/* Referral */}
        <div className="form-group">
          <label className="block text-gray-700 font-medium mb-2">
            Referred By (Optional)
          </label>
          <input
            type="text"
            name="referredBy"
            value={formData.referredBy}
            onChange={handleChange}
            placeholder="How did you hear about us?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="allowCommunication"
            id="allowCommunication"
            checked={formData.allowCommunication}
            onChange={handleChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="allowCommunication" className="text-sm text-gray-600">
            I agree to receive communication from the hiring team via email/phone
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
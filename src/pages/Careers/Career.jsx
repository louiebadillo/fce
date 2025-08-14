// src/pages/Careers.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection';
import careersHero from '../../assets/careers.jpg'; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { jobDetails } from './jobData';

const JobCard = ({ title, location, type, description, jobId }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-orange-200"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="flex gap-4 mb-4 text-gray-600 text-sm">
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
        {location}
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {type}
      </span>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <Link
      to={`/careers/apply/${jobId}`}
      className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
    >
      Apply Now
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </motion.div>
);

const Careers = () => {
  const activeJobs = jobDetails.filter(job => job.isActive);

  return (
    <>
      <HeroSection
        backgroundImage={careersHero}
        title=""
        highlightedText="Join Our Team"
        description=""
        descriptionColor='text-orange-500'
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">Career Opportunities</h2>
          <p className="text-gray-600 mb-8">
            At Bonne Haven, we're looking for passionate healthcare professionals who share our 
            commitment to providing exceptional care. Join our team and be part of making a difference 
            in our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Competitive Pay</h3>
              <p className="text-gray-600">Excellent compensation and benefits package</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Work-life balance with flexible scheduling options</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Professional development and career advancement</p>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Current Openings</h2>
          {activeJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {activeJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                There are currently no open positions. Please check back later or 
                contact us to submit your resume for future opportunities.
              </p>
            </div>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Careers;
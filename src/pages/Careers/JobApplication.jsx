import React from 'react';
import { useParams } from 'react-router-dom';
import { jobDetails } from './jobData';
import ApplicationForm from './ApplicationForm';

const JobApplication = () => {
  const { jobId } = useParams();
  const currentJob = jobDetails.find(job => job.jobId === jobId);
  
  if (!currentJob) {
    return <div className="container mx-auto px-4 py-16">Job not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-16">
        {/* Job Details Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">{currentJob.title}</h1>
          
          <div className="flex gap-4 mb-6 text-gray-600">
            {/* Location and Type badges */}
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {currentJob.location}
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentJob.type}
            </span>
          </div>

          {/* Job Summary */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg">{currentJob.summary}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {currentJob.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {currentJob.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {currentJob.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Application Form */}
        <ApplicationForm jobTitle={currentJob.title} />
      </div>
    </div>
  );
};

export default JobApplication;
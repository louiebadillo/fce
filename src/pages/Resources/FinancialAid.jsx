import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import cdhciImg from "../../assets/cdhciinfo.jpg";
import fscdImg from "../../assets/fscd.jpg";

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200" />
    <div className="p-6">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-6" />
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  </div>
);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      <motion.button
        className="flex justify-between items-center w-full py-4 px-6 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600"
        >
          ▼
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 overflow-hidden"
          >
            <div className="py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FinancialAidCard = ({
  title,
  image,
  description,
  fundingInfo,
  eligibility,
  helpInfo,
  buttonLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <Accordion title="How does the Funding Work">{fundingInfo}</Accordion>

          <Accordion title="What are the eligibility requirements needed">
            {eligibility}
          </Accordion>

          <Accordion title="How can Bonne Haven Help?">
            {helpInfo}
          </Accordion>

          <Accordion title="Interested in learning more?">
            <motion.div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us
              </Link>
              {/* New button that uses the buttonLink data */}
              <a
                href={buttonLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                {buttonLink.text}
              </a>
            </motion.div>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

const FinancialAid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const financialAidData = [
    {
      title: "Alberta Blue Cross",
      image: cdhciImg,
      description:
        "Alberta Blue Cross provides comprehensive health coverage and financial support for various medical needs and healthcare services.",
      fundingInfo: (
        <div className="space-y-3">
          <p>Alberta Blue Cross funding works through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Direct billing options for healthcare providers</li>
            <li>Reimbursement claims for eligible expenses</li>
            <li>Coverage for prescribed medical services and equipment</li>
            <li>Supplementary health benefit programs</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://www.ab.bluecross.ca/resources/government-programs/client-directed-home-care.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Visit Alberta Blue Cross Client Directed Home Care Program →
            </a>
          </div>
        </div>
      ),
      eligibility: (
        <div className="space-y-3">
          <p>To be eligible, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be an Alberta resident</li>
            <li>Have valid Alberta Health Care Insurance</li>
            <li>Meet specific program criteria</li>
            <li>Maintain active coverage status</li>
          </ul>
        </div>
      ),
      helpInfo: (
        <div className="space-y-3">
          <p>Our team can assist you with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Navigating coverage options</li>
            <li>Claims submission and processing</li>
            <li>Coordinating with healthcare providers</li>
            <li>Understanding your benefits</li>
          </ul>
        </div>
      ),
      buttonLink: {
        url: "/resources/cdhci",
        text: "Learn More",
      },
    },
    {
      title: "Family Support for Children with Disabilities (FSCD)",
      image: fscdImg,
      description:
        "FSCD provides a wide range of supports and services to families caring for children with disabilities to promote healthy development and encourage participation in community life.",
      fundingInfo: (
        <div className="space-y-3">
          <p>FSCD funding provides:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Direct support services</li>
            <li>Medical equipment coverage</li>
            <li>Respite care funding</li>
            <li>Specialized services support</li>
          </ul>
        </div>
      ),
      eligibility: (
        <div className="space-y-3">
          <p>Eligibility requirements include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Child under 18 years of age</li>
            <li>Child must be a Canadian Citizen or Permanent Resident</li>
            <li>Applicant must be child's guardian</li>
            <li>Child must reside in Alberta</li>
          </ul>
        </div>
      ),
      helpInfo: (
        <div className="space-y-3">
          <p>We can help with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Application process guidance</li>
            <li>Service coordination</li>
            <li>Documentation preparation</li>
            <li>Advocacy support</li>
          </ul>
        </div>
      ),
      buttonLink: {
        url: "https://www.alberta.ca/fscd",
        text: "Learn More",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-4 text-gray-800"
        >
          Financial Aid Options
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Explore various financial support options available to help with your
          healthcare needs.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            financialAidData.map((item, index) => (
              <FinancialAidCard key={index} {...item} />
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FinancialAid;

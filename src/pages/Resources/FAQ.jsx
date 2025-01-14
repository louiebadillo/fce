import React from 'react';
import HeroSection from '../../components/HeroSection';
import faqHero from '../../assets/cdhciphoto.jpg'; // Add your FAQ hero image
import { motion } from 'framer-motion';
import { useState } from 'react';

// Accordion component for each FAQ item
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-orange-500">{question}</h3>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 mb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What types of healthcare professionals do you provide?",
      answer: "We offer a diverse range of staff, including Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Nurse Practitioners (NPs), Personal Support Workers (PSWs), and other specialized care professionals."
    },
    {
      question: "How do you ensure the quality and qualifications of your staff?",
      answer: "All our staff undergo thorough screening, including credential verification, background checks, skills assessments, and interviews. We are committed to providing highly skilled and compassionate professionals."
    },
    {
      question: "Can you accommodate short notice or last-minute staffing requests?",
      answer: "Absolutely! Our team is equipped to handle urgent staffing needs and provide reliable professionals at short notice."
    },
    {
      question: "What industries or facilities do you serve?",
      answer: "We cater to hospitals, long-term care facilities, retirement homes, private residences, clinics, and community healthcare organizations."
    },
    {
      question: "How do your pricing and contracts work?",
      answer: "Our pricing is competitive and based on the type of service, duration, and level of care required. We offer flexible contract options, including per diem, temporary, and permanent placements."
    }
  ];

  return (
    <>
      <HeroSection
        backgroundImage={faqHero}
        title="Frequently Asked Questions"
        highlightedText=""
        description="Find answers to common questions about our services"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>

        {/* Optional Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">
            We're here to help. Contact us for more information.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default FAQ;
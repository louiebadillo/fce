// src/pages/Services/Services.jsx
import { features } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Services.css";
import HeroSection from "../../components/HeroSection";
import SEO from "../../components/SEO";
import servicesHero from "../../assets/appointment.jpg";
import OptimizedImage from "../../components/OptimizedImage";

// Animation variants remain the same
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services"
        description="Discover Bonne Haven's comprehensive home care services in Calgary. From personal care and companionship to dementia care, respite care, palliative care, and special needs support. Personalized care solutions for every need."
        keywords="home care services Calgary, personal care services, companionship care, dementia care, respite care, palliative care, special needs support, meal preparation, housekeeping services Calgary"
      />
      <HeroSection
        backgroundImage={servicesHero}
        title="Our Services"
        highlightedText=""
        description=""
        descriptionColor="text-orange-700"
      />

      <div className="bg-white py-2">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Comprehensive Care Solutions for Your Family
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We provide a full range of nursing and caregiving solutions
              tailored to meet diverse needs, from basic support to advanced
              medical care. Our team of experienced healthcare professionals is
              committed to delivering personalized care that promotes
              independence, dignity, and quality of life.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
              <div className="bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">
                    Personalized Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tailored care plans designed uniquely for you and your
                    family's needs.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Licensed professionals committed to compassionate care
                    delivery.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">
                    Flexible Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    24/7 availability with scheduling that fits your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-8 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Services Grid */}
        <div className="space-y-16 sm:space-y-32">
          {features.map((service, index) => (
            <div key={service.text} className="bg-white">
              <div className="container mx-auto px-4 sm:px-20 lg:px-40">
                <motion.div
                  key={service.text}
                  variants={serviceVariants}
                  viewport={{ once: true }}
                  className={`service-card flex flex-col ${
                    index % 2 === 0
                      ? "lg:flex-row gap-2"
                      : "lg:flex-row-reverse gap-0"
                  } items-start lg:items-center py-2`}
                >
                  {/* Image Container */}
                  <div
                    className={`w-full lg:w-1/2 flex ${
                      index % 2 === 0
                        ? "justify-center lg:justify-end lg:px-8"
                        : "justify-center lg:justify-start lg:px-4"
                    }`}
                  >
                    <div className="relative group overflow-hidden rounded-lg w-full sm:w-[400px]">
                      <OptimizedImage
                        src={service.image}
                        alt={service.text}
                        className="w-full h-[200px] sm:h-[250px] rounded-lg shadow-md"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          imageRendering: "-webkit-optimize-contrast",
                          transform: "translateZ(0)",
                          willChange: "transform",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`w-full lg:w-1/2 space-y-3 lg:max-w-[400px] min-h-[300px] flex flex-col justify-between ${
                      index % 2 === 0 ? "lg:px-8" : "lg:px-4"
                    }`}
                  >
                    <div className="space-y-3">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                          {service.text}
                        </h2>
                      </motion.div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-sm">
                        {service.description}
                      </p>
                    </div>

                    {/*Button*/}
                    <div className="pt-1">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex sm:justify-start"
                      >
                        <Link
                          to={service.path}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 
                          text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium 
                          hover:from-orange-600 hover:to-orange-800 
                          transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Services;

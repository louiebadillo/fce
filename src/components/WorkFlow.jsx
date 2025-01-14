import old1 from "../assets/old1.png";
import { Link } from "react-router-dom";
import { PhoneCall, ClipboardCheck, Users, ArrowRight } from "lucide-react"; // Import icons

const Workflow = () => {
  const steps = [
    {
      icon: <PhoneCall size={24} />,
      title: "1. Contact Us",
      description:
        "Get in touch with our team to discuss your care needs and how we can help.",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "2. Get Assessed",
      description:
        "We'll conduct a thorough assessment to understand your specific care requirements.",
    },
    {
      icon: <Users size={24} />,
      title: "3. Perfect Match",
      description:
        "We'll match you with the right HCA or LPN who will provide care in your home.",
    },
  ];

  return (
    <div>
      {/* Image section with overlaid title */}
      <div className="relative h-[300px] mb-20">
        <img
          src={old1}
          alt="Coding"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl font-semi-bold sm:text-4xl lg:text-5xl text-center tracking-wide px-4">
            Financial Support for Seniors
          </h2>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide px-4">
          Client Directed Home Care Program - CDHCI
        </h2>
        {/* Added description section */}
        <div className="max-w-3xl mx-auto mt-10 mb-16 px-4">
          <p className="text-neutral-600 text-lg mb-6">
            Client-Directed Home Care Invoicing is an innovative program through
            Alberta Blue Cross that empowers individuals to take control of
            their home care services. This program offers flexibility and
            autonomy by allowing clients to personally manage their care
            arrangements and financial aspects.
          </p>
          <p className="text-neutral-600 text-lg mb-6">
            Unlike traditional care models where funding goes directly to
            service providers, this program puts you in charge of selecting your
            care providers and managing service payments.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/cdhci"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/resources/resources/cdhci"
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-md border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              Other Options
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12">
          Getting Started is Easy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <>
              <div
                key={index}
                className="bg-white p-6 rounded-[2rem] border border-gray-200 hover:border-orange-200 transition-colors relative overflow-hidden"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-center">
                  {step.description}
                </p>
              </div>
              {/* Arrows between cards (not showing on mobile) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                >
                  <ArrowRight size={32} className="text-orange-500" />
                </div>
              )}
            </>
          ))}
        </div>

        {/* Contact button */}
        <div className="text-center mt-12 mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-lg hover:bg-orange-600 transition-colors"
          >
            Start Your Care Journey
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Workflow;

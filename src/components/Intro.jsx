import React from "react";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";

const IntroCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="h-24 mb-4 flex items-center justify-center">
        {" "}
        {/* Fixed height container with centering */}
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain" // Fixed size for all images
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Intro = () => {
  const introData = [
    {
      image: Icon1,
      title: "Personalized Care Plan",
      description:
        "At Bonne Haven, we create a customized care plan tailored to your family's unique needs. Our comprehensive approach ensures quality care and support services for your loved one, while helping you maintain balance in your life and peace of mind.",
    },
    {
      image: Icon2,
      title: "Ongoing Management",
      description:
        "We provide detailed reports after each visit, documenting care activities and client interactions. Our dedicated care management ensures transparent communication and continuous support, giving families confidence in their loved one's care.",
    },
    {
      image: Icon3,
      title: "Insured Nurses and Caregivers",
      description:
        "Our team of nurses and caregivers are fully insured, extensively trained, and deeply compassionate. We carefully select professionals who combine clinical expertise with genuine empathy, ensuring care that respects each client's unique background and family dynamics.",
    },
  ];

  return (
    <section className="pt-10 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {introData.map((item, index) => (
            <IntroCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;

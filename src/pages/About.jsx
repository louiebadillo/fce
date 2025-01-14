import HeroSection from "../components/HeroSection";
import aboutus from "../assets/aboutus.jpg";

const About = () => {
  return (
    <>
      <HeroSection
        backgroundImage={aboutus}
        title="About Us"
        highlightedText=""
        description=""
      />

      <div className="container mx-auto px-4 py-12 pt-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Us Section */}
          <section>
            <p className="text-gray-600 text-center">
              Family Care Experts is a locally owned and operated care service
              provider proudly serving Calgary and surrounding communities.
              Since our establishment, we have been dedicated to delivering
              exceptional in-home care services that families can trust.
            </p>
          </section>

          {/* Mission Section */}
          <section>
            <p className="text-gray-600 text-center">
              We are committed to enhancing the quality of life for seniors,
              individuals with special needs, and families requiring support
              through personalized, and compassionate care services. Our goal is
              to help our clients maintain their independence, dignity, and
              comfort while providing peace of mind to their loved ones.
            </p>
          </section>

          {/* Commitment Section */}
          <section>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600">
              Excellence is at the heart of everything we do. We understand that
              each client has unique needs, which is why we develop customized
              care plans that adapt and grow with them. Our approach combines
              professional expertise with genuine compassion, ensuring that
              every interaction reflects our dedication to superior care.
            </p>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 text-center">
              The Family Care Experts team consists of carefully selected
              healthcare professionals, including registered nurses, certified
              healthcare aides, and specialized support staff. Each team member
              undergoes rigorous screening and continuous training to maintain
              the highest standards of care. What truly sets our team apart is
              not just their professional qualifications, but their genuine
              passion for making a positive difference in people's lives.
            </p>
          </section>

          {/* Values Section */}
          <section className="py-6">
            <h2 className="text-3xl text-center font-semibold mb-12 font-['Red_Hat_Text']">
              Our Core Values
            </h2>

            {/* Narrower width container */}
            <div className="max-w-3xl mx-auto px-14">
              <ol className="space-y-8">
                {/* Excellence */}
                <li className="flex gap-6">
                  <span className="font-['Red_Hat_Text'] text-2xl text-orange-500 font-light">
                    01
                  </span>
                  <div className="flex gap-2 items-baseline">
                    <h3 className="text-xl font-['Red_Hat_Text'] font-medium whitespace-nowrap">
                      Excellence:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering outstanding care that exceeds expectations
                    </p>
                  </div>
                </li>

                {/* Compassion */}
                <li className="flex gap-6">
                  <span className="font-['Red_Hat_Text'] text-2xl text-orange-500 font-light">
                    02
                  </span>
                  <div className="flex gap-2 items-baseline">
                    <h3 className="text-xl font-['Red_Hat_Text'] font-medium whitespace-nowrap">
                      Compassion:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Providing care with kindness, empathy, and understanding
                    </p>
                  </div>
                </li>

                {/* Integrity */}
                <li className="flex gap-6">
                  <span className="font-['Red_Hat_Text'] text-2xl text-orange-500 font-light">
                    03
                  </span>
                  <div className="flex gap-2 items-baseline">
                    <h3 className="text-xl font-['Red_Hat_Text'] font-medium whitespace-nowrap">
                      Integrity:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Maintaining the highest ethical standards in all our
                      interactions
                    </p>
                  </div>
                </li>

                {/* Reliability */}
                <li className="flex gap-6">
                  <span className="font-['Red_Hat_Text'] text-2xl text-orange-500 font-light">
                    04
                  </span>
                  <div className="flex gap-2 items-baseline">
                    <h3 className="text-xl font-['Red_Hat_Text'] font-medium whitespace-nowrap">
                      Reliability:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Being dependable and consistent in our care delivery
                    </p>
                  </div>
                </li>

                {/* Respect */}
                <li className="flex gap-6">
                  <span className="font-['Red_Hat_Text'] text-2xl text-orange-500 font-light">
                    05
                  </span>
                  <div className="flex gap-2 items-baseline">
                    <h3 className="text-xl font-['Red_Hat_Text'] font-medium whitespace-nowrap">
                      Respect:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Honoring the dignity and individuality of each client
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Closing Statement */}
          <section className="p-8">
            <p className="text-gray-700 text-center">
              At Family Care Experts, we don't just provide care services – we
              build lasting relationships based on trust, understanding, and
              genuine concern for our clients' well-being. Our commitment to
              Calgary families goes beyond basic care; we strive to be a trusted
              partner in your family's journey, providing the support and peace
              of mind you deserve.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;

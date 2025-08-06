import HeroSection from "../components/HeroSection";
import familyhero from "../assets/familyhero.jpg";

const About = () => {
  return (
    <>
      <HeroSection
        backgroundImage={familyhero}
        title="About Us"
        highlightedText=""
        description=""
      />

      <div className="container mx-auto px-4 py-12 pt-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Us Section */}
          <section>
            <p className="text-gray-600 text-center">
              Bonne Haven is a locally owned and operated care service provider
              proudly serving Calgary and surrounding communities. Since our
              establishment, we have been dedicated to delivering exceptional
              care and other services that families can trust.
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

          <section>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center">
              We are committed to providing dependable, compassionate, and
              quality care services to all our clients, ensuring that every
              individual receives personalized attention and support that
              promotes their well-being and dignity. Through our dedicated team
              of professionals and comprehensive range of services, we strive to
              make a positive difference in the lives of those we serve while
              maintaining the highest standards of excellence and trust.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-center">
              We strive for excellence in all our services, delivered with
              honesty, kindness, and professionalism, as we envision a future
              where every individual receives exceptional care that enhances
              their quality of life. Our vision is to be the leading provider of
              compassionate, reliable services that set the standard for
              excellence in healthcare and support delivery.
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
                      Delivering outstanding care and other services that exceed expectations
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
                      Providing care and services with kindness, empathy, and understanding
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

        </div>
      </div>
    </>
  );
};

export default About;

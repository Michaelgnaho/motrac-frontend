export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Header with Gradient Background */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white">
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">About Us</h1>
          <div className="w-20 h-1 bg-white rounded-full my-6" />
          <p className="text-xl lg:text-2xl leading-relaxed max-w-5xl">
            MOTRAC Global Resources is an organization renowned for its
            deployment of creativity and consulting expertise, and saddled with
            business endeavors in the areas of Human Capital Development,
            Information Communication Technology, Business Development, and
            Economic & Policy Development, Implementation, and Monitoring and
            Evaluation Consulting.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                MOTRAC Global Resources Inc. was initially registered with
                Corporate Affairs Commission (CAC) in{" "}
                <span className="font-semibold text-[#F23B11]">2003</span>, as a
                powerhouse of Business Development creativity and consulting
                expertise, fully Nigerian owned, to recognize potentials and
                develop capacities in people, guaranteeing growth in Businesses
                and Organizations. It was recently re-incorporated in the year{" "}
                <span className="font-semibold text-[#F23B11]">2018</span>.
              </p>
              <p>
                MOTRAC Global Resources Inc. is led by a team of resourceful,
                talented and exceptional professionals with unrivalled
                problem-solving proficiency and acumen in the Services and
                Consultancy industry. We are poised to deliver solutions to our
                Clients&apos; Business development and Consultancy problems and
                provide Project Management services as needed.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F23B11] to-[#ff6844] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
            <p className="text-xl leading-relaxed">
              Basically, we are a{" "}
              <span className="font-bold">
                Human Capital Development Factory
              </span>
              ; we create, develop, and manage people capacities to carry on
              effective and productive enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Shared Value - Full Width Gradient */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Mission, Vision & Shared Value
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To recognize potentials and develop capacities in people,
                guaranteeing growth and development in Government institutions,
                Businesses and Organizations in our areas of competencies and
                the markets we serve.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a World-Class nurturing place for transformation of
                individuals into effective and productive entrepreneurs.
              </p>
            </div>

            {/* Shared Value Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Shared Value
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that the simple things of life give wings to great
                imaginations, making it possible for humans to achieve the
                superlative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
            Our Philosophy
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border-l-8 border-[#F23B11]">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              When an apple fell on the head of Isaac Newton, it created a whole
              new set of thinking which resulted in the innovation of such
              technological masterpieces as the airplane, the space shuttle etc.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              With our team and affiliation of creative minds and networks, we
              tap into the strata of creative thinking, bringing to our clients
              and their brands fresh ideas and unique concepts that leverage
              them in their various markets.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              The module of our service delivery is channeled to exceed our
              client&apos;s expectations and aspiration. Our people are driven
              by the zeal to succeed, to be second to none in what we do and to
              impact our immediate environment and creating visibility, by
              making our clients and their brands leaders in their own right!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Let&apos;s work together to unlock potential and drive sustainable
            growth.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#F23B11] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

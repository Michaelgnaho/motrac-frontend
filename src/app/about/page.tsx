"use client";
import AnimatedContent from "@/components/AnimatedContent";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Header with Gradient Background */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white">
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">About Us</h1>
            <div className="w-20 h-1 bg-white rounded-full my-6" />
            <p className="text-xl lg:text-2xl leading-relaxed max-w-5xl">
              At MOTRAC Global Resources Limited, we transcend the boundaries of
              traditional consultancy. We are strategists, architects of change,
              and catalysts of Africa&apos;s intellectual renaissance —
              engineering ecosystems where innovation, human capital, and
              systemic transformation converge.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* Corporate Introduction - Four Goals */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center">
            Our Purpose
          </h2>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Challenge Orthodoxy",
              description:
                "We dismantle legacy thinking and replace it with future-forward frameworks that redefine what's possible.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
            {
              title: "Unlock Latent Potential",
              description:
                "We identify dormant capacity in people, institutions, and systems — and activate it for exponential impact.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              ),
            },
            {
              title: "Design Resilient Systems",
              description:
                "We build adaptive, scalable infrastructures — from policy to technology — that withstand disruption and drive long-term growth.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              ),
            },
            {
              title: "Embed Sustainable Growth",
              description:
                "We ensure transformation isn't transactional — it's enduring, creating ecosystems where success becomes self-sustaining.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              ),
            },
          ].map((goal, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.2 + index * 0.15}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#F23B11] transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {goal.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {goal.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Our Philosophy
              </h2>
              <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                We believe every challenge carries within it the code of its own
                solution — our role is to decode, design, and deliver it.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Strategic Identity - Four Axes */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
            Strategic Identity
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            MOTRAC operates across four interconnected axes of transformation
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              number: "01",
              title: "Innovation Systems Architecture",
              description:
                "Building R&D frameworks, innovation labs, and intellectual property strategies that turn ideas into high-value assets.",
            },
            {
              number: "02",
              title: "Human Development & Institutional Strengthening",
              description:
                "Designing talent pipelines, leadership academies, and organizational transformation programs that unlock human capital at scale.",
            },
            {
              number: "03",
              title: "Policy, Strategy, and Governance",
              description:
                "Crafting evidence-based policy frameworks, strategic roadmaps, and governance systems that enable sustainable development.",
            },
            {
              number: "04",
              title: "Cultural and Creative Economy Advancement",
              description:
                "Monetizing Africa's creative assets through digital infrastructure, IP management, and global market access strategies.",
            },
          ].map((axis, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction={index % 2 === 0 ? "horizontal" : "horizontal"}
              duration={0.8}
              delay={0.2 + index * 0.15}
              reverse={index % 2 !== 0}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#F23B11] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <span className="text-6xl font-bold text-[#F23B11] opacity-20">
                    {axis.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {axis.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {axis.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
              Mission, Vision & Core Values
            </h2>
          </AnimatedContent>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.8}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
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
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Mission Statement
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  &quot;Empowering Potential, Unlocking Capacity&quot;
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To identify latent capacities, engineer transformative
                  solutions, and catalyze systemic change across Africa&apos;s
                  innovation, policy, and human capital landscapes — ensuring
                  sustainable growth and competitive advantage for our clients
                  and stakeholders.
                </p>
              </div>
            </AnimatedContent>

            {/* Vision Card */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.8}
              reverse={true}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
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
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Vision Statement
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  &quot;Transforming Lives, Elevating Entrepreneurship&quot;
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To be Africa&apos;s most trusted partner in intellectual
                  capital transformation — redefining industries, shaping
                  policy, and building innovation ecosystems that position the
                  continent as a global leader by 2030.
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Core Values - THE M.O.T.R.A.C CODE */}
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            delay={0.2}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-2xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
                Our Core Values — &quot;THE M.O.T.R.A.C CODE&quot;
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    letter: "M",
                    value: "Mastery",
                    description: "Excellence in every engagement",
                  },
                  {
                    letter: "O",
                    value: "Ownership",
                    description: "Accountability for outcomes",
                  },
                  {
                    letter: "T",
                    value: "Transformation",
                    description: "Catalyzing systemic change",
                  },
                  {
                    letter: "R",
                    value: "Resilience",
                    description: "Building adaptive systems",
                  },
                  {
                    letter: "A",
                    value: "Authenticity",
                    description: "Indigenous solutions, global standards",
                  },
                  {
                    letter: "C",
                    value: "Collaboration",
                    description: "Co-creating sustainable futures",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-bold text-white">
                        {value.letter}
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {value.value}
                      </h4>
                    </div>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Shared Value - THE SPARKFORGED CULTURE */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6">
            Our Shared Value
          </h2>
          <p className="text-2xl text-[#F23B11] text-center font-semibold mb-12">
            &quot;THE SPARKFORGED CULTURE&quot;
          </p>
        </AnimatedContent>

        <div className="max-w-6xl mx-auto">
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.8}
            delay={0.2}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border-2 border-gray-100 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that the simple things of life give wings to great
                imaginations, making it possible for humans to achieve the
                superlative. Innovation doesn&apos;t require complexity — it
                requires clarity, creativity, and courage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At MOTRAC, we cultivate a &quot;SparkForged Culture&quot; —
                where every idea, no matter how small, has the potential to
                ignite systemic transformation. We create ecosystems where
                creativity thrives, where failure is learning, and where
                breakthrough solutions emerge from collaborative genius.
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Intellectual Curiosity",
                description:
                  "We question assumptions and explore uncharted territories",
              },
              {
                title: "Collaborative Innovation",
                description:
                  "We co-create solutions with clients, not for them",
              },
              {
                title: "Sustainable Impact",
                description:
                  "We measure success by lasting transformation, not transactions",
              },
              {
                title: "Ethical Leadership",
                description:
                  "We lead with integrity, transparency, and social responsibility",
              },
            ].map((principle, index) => (
              <AnimatedContent
                key={index}
                distance={60}
                direction="vertical"
                duration={0.7}
                delay={0.3 + index * 0.1}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#F23B11]">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Why MOTRAC Matters */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
              Why MOTRAC Matters
            </h2>
          </AnimatedContent>

          <div className="max-w-5xl mx-auto">
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.8}
              delay={0.2}
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 mb-8">
                <p className="text-xl text-white leading-relaxed mb-6">
                  Africa&apos;s innovation economy is projected to exceed USD
                  300 billion by 2030. Yet, most African enterprises lack the
                  strategic infrastructure, human capital systems, and policy
                  frameworks to capture this opportunity.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  MOTRAC bridges this gap — not with imported models, but with
                  indigenous methodologies that understand Africa&apos;s unique
                  contexts, challenges, and competitive advantages.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.8}
              delay={0.4}
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 text-center">
                <blockquote className="text-2xl lg:text-3xl text-gray-800 font-light italic leading-relaxed">
                  &quot;Africa&apos;s next billion-dollar ideas will not be
                  imported — they will be indigenous, data-driven, and designed
                  from within.&quot;
                </blockquote>
                <p className="text-[#F23B11] font-semibold mt-6 text-lg">
                  — MOTRAC Vision Statement
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6">
            Unique Value Proposition
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            What Sets MOTRAC Apart
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Transformative Thinking Approach",
              description:
                "We don't implement cookie-cutter solutions. We diagnose root causes, design bespoke frameworks, and co-create transformation roadmaps tailored to each client's DNA.",
              metric: "+30-50% increases in innovation throughput",
            },
            {
              title: "Indigenous Innovation Models",
              description:
                "Our methodologies are designed for African realities — from informal economies to digital leapfrogging — ensuring relevance, scalability, and impact.",
              metric: "55% higher ROI vs. imported frameworks",
            },
            {
              title: "Human-Centered Technology Integration",
              description:
                "We merge cutting-edge technology (AI, blockchain, IoT) with human capital development, ensuring tech serves people, not the other way around.",
              metric: "Exponential productivity gains",
            },
            {
              title: "Data-Driven Policy Design",
              description:
                "We leverage real-time data, predictive analytics, and evidence-based research to craft policies that work — not just on paper, but in practice.",
              metric: "Proven policy impact at scale",
            },
            {
              title: "Ecosystem Orchestration",
              description:
                "We don't just consult — we build ecosystems. We connect clients to funding, technology partners, policy influencers, and market access channels.",
              metric: "360° transformation enablement",
            },
          ].map((item, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction={index % 2 === 0 ? "horizontal" : "horizontal"}
              duration={0.8}
              delay={0.1 + index * 0.1}
              reverse={index % 2 !== 0}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#F23B11] transition-all">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="inline-block bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {item.metric}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          delay={0.6}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border-l-8 border-[#F23B11] text-center">
            <p className="text-2xl lg:text-3xl text-gray-800 font-light leading-relaxed">
              &quot;We transform potential into performance, vision into value,
              and ideas into impact — at scale, with speed, and for
              sustainability.&quot;
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Join Africa&apos;s most innovative enterprises in building a
              future of sustainable growth and competitive advantage.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#F23B11] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </a>
          </AnimatedContent>
        </div>
      </section>
    </main>
  );
}

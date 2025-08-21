"use client";
import { Lightbulb, Eye, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We design modern, scalable, and innovative solutions that help
            businesses grow and succeed in the digital era.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mb-4">
              <Lightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empower businesses with solutions that simplify processes, boost
              productivity, and drive growth.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white mb-4">
              <Eye />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be a global leader in digital transformation by delivering
              consistent value and innovation.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white mb-4">
              <HeartHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Values
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Innovation, integrity, and collaboration guide everything we do,
              creating lasting impact.
            </p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="Team"
              className="w-80 rounded-3xl shadow-lg hover:scale-105 transition"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Meet Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our dedicated experts work tirelessly to deliver high-quality
              solutions. With passion and years of experience, we help you
              achieve business goals faster and smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 max-w-2xl mx-auto">
            We are dedicated to building modern, scalable, and innovative
            solutions that help businesses grow and succeed in the digital era.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <div>
            <h3 className="mb-3 text-xl font-semibold dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              To empower businesses with powerful technology solutions that
              simplify processes, boost productivity, and drive sustainable
              growth.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="mb-3 text-xl font-semibold dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              To become a global leader in digital transformation by
              consistently delivering value and innovation to our clients.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="mb-3 text-xl font-semibold dark:text-white">
              Our Values
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Innovation, integrity, and collaboration are at the heart of
              everything we do, helping us create meaningful impact for our
              customers.
            </p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16 flex flex-col items-center text-center">
          <img
            className="w-64 rounded-2xl shadow-lg mb-6"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="Team mockup"
          />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Our dedicated team of experts works tirelessly to deliver
            high-quality solutions. With years of experience and passion for
            innovation, we help you achieve your business goals faster and
            smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

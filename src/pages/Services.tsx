const services = [
  {
    title: "Web Development",
    description:
      "We build modern, scalable, and responsive websites using the latest technologies tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description:
      "From concept to deployment, we create intuitive and high-performing mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Our creative team designs beautiful, user-friendly interfaces that enhance customer engagement and satisfaction.",
    icon: "🎨",
  },
  {
    title: "E-commerce Solutions",
    description:
      "We deliver secure and fast online stores with payment gateway integration, inventory management, and more.",
    icon: "🛒",
  },
  {
    title: "SEO & Marketing",
    description:
      "Boost your online visibility and grow your audience with our SEO optimization and digital marketing strategies.",
    icon: "🚀",
  },
  {
    title: "Custom Software",
    description:
      "We develop custom software solutions tailored specifically for your business processes and goals.",
    icon: "⚙️",
  },
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 max-w-2xl mx-auto">
            We provide a wide range of digital solutions designed to help your
            business grow, innovate, and succeed in today’s fast-paced world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md dark:bg-gray-800 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

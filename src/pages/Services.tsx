import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Rocket,
  Cog,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build modern, scalable, and responsive websites using the latest technologies tailored to your business needs.",
    icon: <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Mobile Apps",
    description:
      "From concept to deployment, we create intuitive and high-performing mobile applications for iOS and Android.",
    icon: (
      <Smartphone className="w-10 h-10 text-green-600 dark:text-green-400" />
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Our creative team designs beautiful, user-friendly interfaces that enhance customer engagement and satisfaction.",
    icon: <Palette className="w-10 h-10 text-pink-600 dark:text-pink-400" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "We deliver secure and fast online stores with payment gateway integration, inventory management, and more.",
    icon: (
      <ShoppingCart className="w-10 h-10 text-orange-600 dark:text-orange-400" />
    ),
  },
  {
    title: "SEO & Marketing",
    description:
      "Boost your online visibility and grow your audience with our SEO optimization and digital marketing strategies.",
    icon: <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "Custom Software",
    description:
      "We develop custom software solutions tailored specifically for your business processes and goals.",
    icon: <Cog className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl dark:bg-gray-800 transition transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gray-100 dark:bg-gray-700">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
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

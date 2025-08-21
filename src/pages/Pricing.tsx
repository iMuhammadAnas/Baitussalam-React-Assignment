const plans = [
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    features: [
      "1 Website",
      "Basic Support",
      "Free SSL Certificate",
      "Community Access",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "$49",
    period: "/month",
    features: [
      "5 Websites",
      "Priority Support",
      "Free Domain (1 year)",
      "SEO Optimization",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    features: [
      "Unlimited Websites",
      "24/7 Premium Support",
      "Advanced Security",
      "Custom Integrations",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Flexible Pricing Plans
          </h2>
          <p className="text-gray-600 sm:text-lg dark:text-gray-400 max-w-2xl mx-auto">
            Start small, upgrade as you grow. Choose the plan that matches your
            business needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl border shadow-xl backdrop-blur-md transition-transform hover:scale-105 ${
                plan.highlight
                  ? "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-900/40 dark:border-indigo-500 scale-105"
                  : "border-gray-200 bg-white/70 dark:bg-gray-800/40 dark:border-gray-700"
              } p-8`}
            >
              {/* Title */}
              <div>
                <h3
                  className={`mb-3 text-2xl font-bold ${
                    plan.highlight
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5 11.586a1 1 0 111.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`mt-8 w-full px-5 py-3 rounded-xl font-semibold transition shadow-md ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:from-indigo-700 hover:to-indigo-600"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

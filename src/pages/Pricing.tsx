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
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Pricing
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade anytime as your
            business grows.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-lg border shadow p-6 ${
                plan.highlight
                  ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900 dark:border-indigo-500"
                  : "border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              }`}
            >
              {/* Title */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mb-4 flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
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
                className={`w-full px-4 py-2 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
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

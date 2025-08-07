const Icon = () => (
  <svg
    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>
);

const faqData = [
  {
    question: 'What do you mean by "Figma assets"?',
    answer: `You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.`,
  },
  {
    question: 'What does "lifetime access" exactly mean?',
    answer: `Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.`,
  },
  {
    question: "How does support work?",
    answer: `We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.`,
    moreInfo: `Feel free to <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">contact us</a> and we'll help you out as soon as we can.`,
  },
  {
    question: "I want to build more than one project. Is that allowed?",
    answer: `You can use Windster for an unlimited amount of projects. As long as you don't build a product that directly competes with Windster, it's fine.`,
    moreInfo: `Find out more information by <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">reading the license</a>.`,
  },
  {
    question: 'What does "free updates" include?',
    answer: `The free updates that will be provided is based on the <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">roadmap</a> that we have laid out for this project.`,
  },
  {
    question: "What does the free version include?",
    answer: `The <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">free version</a> of Windster includes a minimal style guideline, component variants, and a dashboard page.`,
    moreInfo: `You can use this version for any purposes, because it is open-source under the MIT license.`,
  },
  {
    question: "What is the difference between Windster and Tailwind UI?",
    answer: `Although both are built with Tailwind CSS, Windster includes more components and will later include app, marketing, and e-commerce UI kits.`,
  },
  {
    question: "Can I use Windster in open-source projects?",
    answer: `Yes, you can use it as long as it’s not a UI kit or template that competes with Windster.`,
    moreInfo: `Read more in the <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">license</a>.`,
  },
];

const FaqSection = () => {
  const mid = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, mid);
  const rightColumn = faqData.slice(mid);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>

        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          {/* Left column */}
          <div>
            {leftColumn.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Icon /> {item.question}
                </h3>
                <p
                  className="text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
                {item.moreInfo && (
                  <p
                    className="text-gray-500 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: item.moreInfo }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            {rightColumn.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Icon /> {item.question}
                </h3>
                <p
                  className="text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
                {item.moreInfo && (
                  <p
                    className="text-gray-500 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: item.moreInfo }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

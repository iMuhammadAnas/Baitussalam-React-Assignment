import React from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Modern Web App with React & Tailwind CSS",
    description:
      "Learn step-by-step how to create a fully responsive, modern web app using React and Tailwind CSS. Perfect for beginners and pros.",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    author: "John Doe",
    date: "August 5, 2025",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Tips to Improve Your Code",
    description:
      "Here are ten essential JavaScript tips that will make your code cleaner, faster, and more maintainable.",
    image: "https://flowbite.com/docs/images/blog/image-2.jpg",
    author: "Jane Smith",
    date: "August 3, 2025",
  },
  {
    id: 3,
    title: "Understanding TypeScript: A Beginner's Guide",
    description:
      "TypeScript is becoming the go-to language for modern web apps. This guide will walk you through the basics.",
    image: "https://flowbite.com/docs/images/blog/image-3.jpg",
    author: "Mark Wilson",
    date: "July 30, 2025",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map(({id, image, title, description, author, date}) => (
            <div
              key={id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={image}
                  alt={title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>By {author}</span>
                  <span>{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            See All Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

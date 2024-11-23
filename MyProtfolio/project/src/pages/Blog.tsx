import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Getting Started with Web Development",
    date: "March 1, 2024",
    excerpt: "Learn the basics of web development and start your journey...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Modern JavaScript Features",
    date: "February 28, 2024",
    excerpt: "Explore the latest features in JavaScript and how to use them...",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Responsive Design Best Practices",
    date: "February 25, 2024",
    excerpt: "Tips and tricks for creating responsive web designs...",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  }
];

export function Blog() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Blog</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400">{post.date}</span>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    Read more →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
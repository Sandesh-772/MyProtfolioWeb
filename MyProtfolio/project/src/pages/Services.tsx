import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-friendly interfaces designed with your users in mind.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "Efficient database structures for your applications.",
  },
];

export function Services() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Services</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
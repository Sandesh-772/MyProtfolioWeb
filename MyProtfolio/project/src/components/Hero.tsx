import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-indigo-600">Sandesh Jamkatel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Student & Tech Enthusiast passionate about creating innovative solutions
            </p>
            <div className="flex space-x-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
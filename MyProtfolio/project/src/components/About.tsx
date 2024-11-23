import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>BCA - Currently Pursuing</li>
                    <li>High School Diploma - 2021</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Code2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Web Development (HTML, CSS, JavaScript)</li>
                    <li>React.js & Modern Frontend Technologies</li>
                    <li>UI/UX Design Principles</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate student currently pursuing my BCA degree. My journey in tech
                started with a curiosity about how websites work, which led me to dive deep
                into web development. I'm constantly learning and exploring new technologies
                to enhance my skills and create meaningful projects.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
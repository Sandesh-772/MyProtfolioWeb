import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600">© 2024 Sandesh Jamkatel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
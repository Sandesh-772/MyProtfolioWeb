import React from 'react';
import { motion } from 'framer-motion';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Save, Image, Link as LinkIcon } from 'lucide-react';

export function Dashboard() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your content here...</p>',
  });

  const [title, setTitle] = React.useState('');
  const [selectedSection, setSelectedSection] = React.useState('blog');

  const handleSave = () => {
    // Here you would typically save to a backend
    console.log('Saving content:', {
      title,
      content: editor?.getHTML(),
      section: selectedSection
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Dashboard</h1>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white mb-4"
              >
                <option value="blog">Blog Post</option>
                <option value="services">Service</option>
                <option value="projects">Project</option>
              </select>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="border dark:border-gray-600 rounded-lg overflow-hidden mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-2 border-b dark:border-gray-600">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                    <Image className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                    <LinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
              <EditorContent 
                editor={editor} 
                className="prose dark:prose-invert max-w-none p-4 min-h-[300px] bg-white dark:bg-gray-800"
              />
            </div>

            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Save className="w-5 h-5" />
              <span>Save Content</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
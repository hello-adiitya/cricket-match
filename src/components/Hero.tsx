import React from 'react';
import { motion } from 'framer-motion';
import { Ticket as Cricket, FolderRoot as Football } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lineup Builder for
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
              {" "}Fantasy Cricket & Soccer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            PerfectLineup analyzes 1000's of data points to provide in-depth stats and AI-generated lineups.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <Cricket className="h-5 w-5" />
              <span>Go to Cricket</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full flex items-center justify-center space-x-2 hover:bg-primary-700 transition-colors"
            >
              <Football className="h-5 w-5" />
              <span>Go to Soccer</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
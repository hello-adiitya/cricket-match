import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Labs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PerfectLineup Labs
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Try our Latest<br />
              Experiments to Improve<br />
              your Fantasy Game
            </h3>
            <p className="text-gray-300 mb-8">
              Free access to cutting-edge AI and ML tools for optimised
              fantasy sports lineup generation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              See it In Action
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Labs;
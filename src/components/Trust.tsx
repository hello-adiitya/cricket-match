import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award } from 'lucide-react';

const Trust = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Trusted by Millions,<br />
          Recommended by Experts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-primary-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">10 Lakh+</h3>
            <p className="text-gray-600">Happy Users</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-primary-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">4.2</h3>
            <p className="text-gray-600">Avg Playstore rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6"
          >
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-primary-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Expert Insights</h3>
            <p className="text-gray-600">Cricket Experts sharing secrets<br />for building Fantasy Lineups</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
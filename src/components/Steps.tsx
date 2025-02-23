import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Lock, Cpu } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Select a Match',
    description: 'Choose from upcoming matches'
  },
  {
    icon: BarChart2,
    title: 'View Detailed Stats',
    description: 'Analyze player performance data'
  },
  {
    icon: Lock,
    title: 'Lock/Exclude Players',
    description: 'Customize team selection'
  },
  {
    icon: Cpu,
    title: 'Generate Teams',
    description: 'Create up to 100 AI-powered teams'
  }
];

const Steps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            4 Easy steps to get multiple teams
          </motion.h2>
          <p className="text-gray-600">Follow these 4 easy steps to get up to 100 fantasy teams for Cricket or Soccer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
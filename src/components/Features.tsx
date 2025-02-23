import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, MapPin, List, Swords, Calculator } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Auto Generated teams',
    description: 'Get algorithm suggested teams specially optimized for Grand leagues and Small leagues'
  },
  {
    icon: LineChart,
    title: 'Player Statistics',
    description: 'Find your perfect player by viewing detailed information of every player'
  },
  {
    icon: MapPin,
    title: 'Venue Reports',
    description: 'Understand the pitch performance to select the players as per the pitch conditions'
  },
  {
    icon: List,
    title: 'Cheatsheet',
    description: 'Shows the top five performing players to help you pick the best'
  },
  {
    icon: Swords,
    title: 'Player Battle',
    description: 'Study key player battles across various stats and metrics to select the finest'
  },
  {
    icon: Calculator,
    title: 'Contest Simulator',
    description: 'Know the chances of your teams making it to the winning zone without spending a single penny'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          PerfectLineup has got everything<br />
          to help you create better fantasy teams
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
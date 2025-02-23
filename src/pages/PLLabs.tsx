import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, MessageSquare, Trophy, LineChart, Users, Swords, Crown } from 'lucide-react';

const PLLabs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      number: '01',
      title: 'Access Advanced Tools',
      description: 'Find a suite of experimental AI and ML based analytical tools designed for optimizing fantasy sports lineups'
    },
    {
      number: '02',
      title: 'Apply Insights to Lineups',
      description: 'Use the insights gained to create or adjust fantasy lineups for enhanced performance'
    },
    {
      number: '03',
      title: 'Provide Feedback',
      description: 'Share feedback on effectiveness and your experience to helps us get better'
    }
  ];

  const tools = [
    {
      title: 'Score and Win Predictor',
      description: 'Get forecasts of match scores and victory margins with our AI-driven, user friendly tools',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
      icon: Trophy
    },
    {
      title: 'PL Coverage Index',
      description: 'Discover high impact players easily based on potential for significant game involvement',
      image: 'https://images.unsplash.com/photo-1517940001917-1c03b8b1b85b?auto=format&fit=crop&q=80',
      icon: LineChart
    },
    {
      title: 'Player Combinations',
      description: 'This guide is super useful for identifying player combinations that are likely to score big.',
      image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80',
      icon: Users
    },
    {
      title: 'Captain Suggestions',
      description: 'Identify the perfect captain pick for your fantasy team by answering 5 quick questions on your team and match conditions',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80',
      icon: Crown
    }
  ];

  const features = [
    {
      title: 'Lineup Generator',
      description: 'Get algorithm suggested teams specially optimized according to your preferences',
      icon: Brain
    },
    {
      title: 'Export Teams',
      description: 'Export teams to your favorite fantasy platforms. Easily make changes or replace teams',
      icon: Zap
    },
    {
      title: 'Grand League Simulator',
      description: 'Get a taste of competition in Grand Leagues and get an indication of your potential winnings',
      icon: Swords
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PerfectLineup Labs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Try our latest experiments to improve your fantasy game
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Free access to cutting-edge AI and ML tools for optimised fantasy sports lineup generation
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <div className="text-4xl font-bold text-primary-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Tools */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            New Tools Available in PL Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <tool.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                    <p className="text-gray-200">{tool.description}</p>
                    <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                      See it In Action
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            More On Perfect Lineup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-lg bg-gray-50 dark:bg-gray-700 text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary-600" />
                <h3 className="text-xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                <button className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                  Explore
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PLLabs;
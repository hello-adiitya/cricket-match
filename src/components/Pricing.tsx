import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'PRO',
    price: '₹99',
    features: [
      '11 Teams',
      'Simulator contest'
    ]
  },
  {
    name: 'STAR',
    price: '₹199',
    features: [
      '20 Teams',
      'Simulator contest',
      'Generate teams on different logic',
      'Fix number of players',
      'Get teams on Email'
    ]
  },
  {
    name: 'EXPERT',
    price: '₹499',
    features: [
      '100 Teams',
      'Simulator contest',
      'Generate teams on different logic',
      'Fix number of players',
      'Get teams on Email',
      'Player exposure'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a 3-day FREE trial
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/Per Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Subscribe now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
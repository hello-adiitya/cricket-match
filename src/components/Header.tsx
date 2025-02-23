import React, { useState } from 'react';
import { Menu, X, TrendingUp, Calendar, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'PL Labs', icon: TrendingUp, isNew: true, path: '/labs' },
    { label: 'Upcoming Cricket', icon: Calendar, path: '/cricket' },
    { label: 'Upcoming Football', icon: Calendar, path: '/football' },
    { label: 'WPL 2025', icon: Users, path: '/wpl' },
    { label: 'Champions Trophy', icon: Users, path: '/champions-trophy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="PerfectLineup" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">PerfectLineup</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  location.pathname === item.path ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.isNew && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary-500 text-white rounded-full">
                    New
                  </span>
                )}
              </Link>
            ))}
            <ThemeToggle />
            <button className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                      location.pathname === item.path ? 'text-primary-600 dark:text-primary-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary-500 text-white rounded-full">
                        New
                      </span>
                    )}
                  </Link>
                ))}
                <button className="w-full px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
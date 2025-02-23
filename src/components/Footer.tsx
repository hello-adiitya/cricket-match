import React from 'react';
import { Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">PerfectLineup</span>
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">CORPORATE OFFICE</h4>
              <p className="text-sm">
                Viscus Infotech ltd, 31/2, New Palasia,<br />
                Near Dhobi Ghat, Indore, Madhya Pradesh 452001
              </p>
            </div>
            <div>
              <p className="text-sm">+91-98260-80465</p>
              <p className="text-sm">service@perfectlineup.in</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500">Blog</a></li>
              <li><a href="#" className="hover:text-primary-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-500">Why Perfect Lineup</a></li>
              <li><a href="#" className="hover:text-primary-500">Free Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500">Upcoming Cricket Series</a></li>
              <li><a href="#" className="hover:text-primary-500">Upcoming Football Series</a></li>
              <li><a href="#" className="hover:text-primary-500">Cricket Stadiums</a></li>
              <li><a href="#" className="hover:text-primary-500">Football Stadiums</a></li>
              <li><a href="#" className="hover:text-primary-500">PerfectLinup Videos</a></li>
              <li><a href="#" className="hover:text-primary-500">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500">Billing & Subscriptions</a></li>
              <li><a href="#" className="hover:text-primary-500">Terms of Use</a></li>
              <li><a href="#" className="hover:text-primary-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm">
            <p className="mb-4">PerfectLineup © 2025. All Rights Reserved</p>
            <p className="mb-4">
              Disclaimer - PerfectLineup is an educational tool providing detailed analysis of sports players based on their past performances. 
              We are not associated with any gaming activity and do not host any kind of paid or free contests or pool games. 
              Our focus is purely on data-driven solutions to enhance our users' knowledge.
            </p>
            <p className="mb-4">
              Perfect Lineup is not affiliated in any way to and claims no association, in any capacity whatsoever, 
              with the Residents of the states of SIKKIM, ASSAM, ODISHA, TELANGANA, NAGALAND, ANDHRA PRADESH and 
              where otherwise prohibited by law are not eligible to access Perfect Lineup.
            </p>
            <p>This platform is applicable for users 18+ Only</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
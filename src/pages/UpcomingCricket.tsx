import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Trophy, Target } from 'lucide-react';
import { format, parse } from 'date-fns';
import { CricketMatch } from '../types/cricket';

const UpcomingCricket = () => {
  const [matches, setMatches] = useState<CricketMatch[]>([]);
  const [displayedMatches, setDisplayedMatches] = useState<CricketMatch[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [visibleMatches, setVisibleMatches] = useState(10);

  useEffect(() => {
    const mockMatches: CricketMatch[] = [
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-20',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-21',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-22',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-19',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-22',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-27',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-28',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '1',
        team1: { code: 'PAK', name: 'Pakistan' },
        team2: { code: 'IND', name: 'India' },
        date: '2025-02-23',
        time: '14:30',
        venue: 'Dubai International Cricket Stadium',
        tournament: 'Champions Trophy',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      {
        id: '2',
        team1: { code: 'TTN', name: 'Titans' },
        team2: { code: 'DOL', name: 'Dolphins' },
        date: '2025-02-23',
        time: '13:30',
        venue: 'SuperSport Park, Centurion',
        tournament: 'CSA Provincial One-Day Challenge Division One',
        format: 'One day',
        isPlayingXIAnnounced: false
      },
      
      // Add all other matches here following the same pattern
    ];

    setMatches(mockMatches);
    setDisplayedMatches(mockMatches);
  }, []);

  const filterMatches = () => {
    let filtered = [...matches];

    if (searchQuery) {
      filtered = filtered.filter(match => 
        match.team1.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.team2.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.tournament.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter(match => match.date === selectedDate);
    }

    setDisplayedMatches(filtered);
  };

  useEffect(() => {
    filterMatches();
  }, [searchQuery, selectedDate]);

  const loadMore = () => {
    setVisibleMatches(prev => prev + 10);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Cricket Matches
          </h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search teams or tournaments..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match List */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {displayedMatches.slice(0, visibleMatches).map((match) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {format(parse(match.date, 'yyyy-MM-dd', new Date()), 'dd MMM')}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {match.time}
                    </span>
                  </div>
                  {!match.isPlayingXIAnnounced && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                      Playing XI not announced
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {match.team1.code}
                    </div>
                    <span className="text-gray-400">vs</span>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {match.team2.code}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4" />
                    <span>{match.tournament}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>{match.venue}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Match Prediction
                  </button>
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Generate Lineups
                  </button>
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Score Prediction
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {displayedMatches.length > visibleMatches && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingCricket;
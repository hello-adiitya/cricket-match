import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Trophy, Target } from "lucide-react";
import { format, parse } from "date-fns";
import { CricketMatch } from "../types/cricket";

const UpcomingCricket = () => {
  const [matches, setMatches] = useState<CricketMatch[]>([]);
  const [displayedMatches, setDisplayedMatches] = useState<CricketMatch[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [visibleMatches, setVisibleMatches] = useState(10);

  useEffect(() => {
    const mockMatches: CricketMatch[] = [
      {
        id: "1",
        team1: {
          code: "IND", name: "India", flag: "https://flagcdn.com/in.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "SA", name: "South Africa", flag: "https://flagcdn.com/za.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-23",
        time: "14:00",
        venue: "MCG, Melbourne",
        tournament: "ICC World Cup",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "2",
        team1: {
          code: "IND", name: "India", flag: "https://flagcdn.com/in.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "SA", name: "South Africa", flag: "https://flagcdn.com/za.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-24",
        time: "15:30",
        venue: "Wankhede Stadium, Mumbai",
        tournament: "ICC World Cup",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "3",
        team1: {
          code: "PAK", name: "Pakistan", flag: "https://flagcdn.com/pk.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "NZ", name: "New Zealand", flag: "https://flagcdn.com/nz.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-25",
        time: "12:30",
        venue: "Lahore Stadium",
        tournament: "Champions Trophy",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "4",
        team1: {
          code: "BAN", name: "Bangladesh", flag: "https://flagcdn.com/bd.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "WI", name: "West Indies", flag: "https://flagcdn.com/tt.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-26",
        time: "14:00",
        venue: "Mirpur, Dhaka",
        tournament: "T20 World Cup",
        format: "T20",
        isPlayingXIAnnounced: true,
      },
      {
        id: "5",
        team1: {
          code: "SL", name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "AFG", name: "Afghanistan", flag: "https://flagcdn.com/af.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-27",
        time: "16:00",
        venue: "Colombo",
        tournament: "Asia Cup",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "6",
        team1: {
          code: "AUS", name: "Australia", flag: "https://flagcdn.com/au.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "IND", name: "India", flag: "https://flagcdn.com/in.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-02-28",
        time: "13:30",
        venue: "Sydney Cricket Ground",
        tournament: "Border-Gavaskar Trophy",
        format: "Test",
        isPlayingXIAnnounced: true,
      },
      {
        id: "7",
        team1: {
          code: "SA", name: "South Africa", flag: "https://flagcdn.com/za.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "NZ", name: "New Zealand", flag: "https://flagcdn.com/nz.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-01",
        time: "14:30",
        venue: "Cape Town",
        tournament: "Test Championship",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "8",
        team1: {
          code: "ENG", name: "England", flag: "https://flagcdn.com/gb-eng.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "WI", name: "West Indies", flag: "https://flagcdn.com/tt.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-02",
        time: "12:00",
        venue: "Lord's, London",
        tournament: "Ashes Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "9",
        team1: {
          code: "PAK", name: "Pakistan", flag: "https://flagcdn.com/pk.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "AUS", name: "Australia", flag: "https://flagcdn.com/au.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-03",
        time: "18:00",
        venue: "Karachi",
        tournament: "Tri-Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "10",
        team1: {
          code: "BAN", name: "Bangladesh", flag: "https://flagcdn.com/bd.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "SL", name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-04",
        time: "15:00",
        venue: "Chattogram",
        tournament: "Asia Cup",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "11",
        team1: {
          code: "ENG", name: "England", flag: "https://flagcdn.com/gb-eng.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "IND", name: "India", flag: "https://flagcdn.com/in.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-05",
        time: "14:00",
        venue: "Edgbaston, Birmingham",
        tournament: "Test Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "12",
        team1: {
          code: "NZ", name: "New Zealand", flag: "https://flagcdn.com/nz.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "WI", name: "West Indies", flag: "https://flagcdn.com/tt.svg",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-06",
        time: "12:00",
        venue: "Wellington",
        tournament: "T20 Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "13",
        team1: {
          code: "ENG",
          name: "England",
          flag: "https://flagcdn.com/w320/gb.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "NZ",
          name: "New Zealand",
          flag: "https://flagcdn.com/w320/nz.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-07",
        time: "10:00",
        venue: "Wellington",
        tournament: "T20 World Cup",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "14",
        team1: {
          code: "WI",
          name: "West Indies",
          flag: "https://flagcdn.com/w320/tt.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "AFG",
          name: "Afghanistan",
          flag: "https://flagcdn.com/w320/af.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-08",
        time: "12:30",
        venue: "Barbados",
        tournament: "T20 Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "15",
        team1: {
          code: "SL",
          name: "Sri Lanka",
          flag: "https://flagcdn.com/w320/lk.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "PAK",
          name: "Pakistan",
          flag: "https://flagcdn.com/w320/pk.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-09",
        time: "14:00",
        venue: "Colombo",
        tournament: "Test Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "16",
        team1: {
          code: "IND",
          name: "India",
          flag: "https://flagcdn.com/w320/in.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "WI",
          name: "West Indies",
          flag: "https://flagcdn.com/w320/tt.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-10",
        time: "18:00",
        venue: "Chennai",
        tournament: "T20 Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "17",
        team1: {
          code: "AUS",
          name: "Australia",
          flag: "https://flagcdn.com/w320/au.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "BAN",
          name: "Bangladesh",
          flag: "https://flagcdn.com/w320/bd.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-11",
        time: "14:00",
        venue: "Adelaide",
        tournament: "ODI Series",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "18",
        team1: {
          code: "ENG",
          name: "England",
          flag: "https://flagcdn.com/w320/gb.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "SL",
          name: "Sri Lanka",
          flag: "https://flagcdn.com/w320/lk.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-12",
        time: "16:30",
        venue: "The Oval, London",
        tournament: "Test Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "19",
        team1: {
          code: "PAK",
          name: "Pakistan",
          flag: "https://flagcdn.com/w320/pk.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "AFG",
          name: "Afghanistan",
          flag: "https://flagcdn.com/w320/af.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-13",
        time: "17:00",
        venue: "Lahore",
        tournament: "T20 World Cup",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "20",
        team1: {
          code: "NZ",
          name: "New Zealand",
          flag: "https://flagcdn.com/w320/nz.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        team2: {
          code: "SA",
          name: "South Africa",
          flag: "https://flagcdn.com/w320/za.png",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          }
        },
        date: "2025-03-14",
        time: "12:30",
        venue: "Auckland",
        tournament: "ODI Series",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "21",
        team1: {
          code: "IND",
          name: "India",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "ENG",
          name: "England",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-15",
        time: "14:30",
        venue: "Delhi",
        tournament: "Test Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "22",
        team1: {
          code: "AUS",
          name: "Australia",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "PAK",
          name: "Pakistan",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-16",
        time: "10:00",
        venue: "Perth",
        tournament: "Tri-Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "23",
        team1: {
          code: "SA",
          name: "South Africa",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "BAN",
          name: "Bangladesh",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-17",
        time: "14:00",
        venue: "Durban",
        tournament: "ODI Series",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "24",
        team1: {
          code: "WI",
          name: "West Indies",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "NZ",
          name: "New Zealand",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-18",
        time: "18:30",
        venue: "Kingston",
        tournament: "T20 World Cup",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "25",
        team1: {
          code: "SL",
          name: "Sri Lanka",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "IND",
          name: "India",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-19",
        time: "12:00",
        venue: "Galle",
        tournament: "Test Series",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "26",
        team1: {
          code: "ENG",
          name: "England",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "AUS",
          name: "Australia",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-20",
        time: "14:00",
        venue: "Lord's, London",
        tournament: "Ashes",
        format: "Test",
        isPlayingXIAnnounced: false,
      },
      {
        id: "27",
        team1: {
          code: "PAK",
          name: "Pakistan",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "BAN",
          name: "Bangladesh",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-21",
        time: "15:30",
        venue: "Multan",
        tournament: "T20 Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "28",
        team1: {
          code: "NZ",
          name: "New Zealand",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "AFG",
          name: "Afghanistan",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-22",
        time: "12:00",
        venue: "Wellington",
        tournament: "ODI Series",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
      {
        id: "29",
        team1: {
          code: "SA",
          name: "South Africa",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "WI",
          name: "West Indies",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-23",
        time: "14:30",
        venue: "Johannesburg",
        tournament: "T20 Series",
        format: "T20",
        isPlayingXIAnnounced: false,
      },
      {
        id: "30",
        team1: {
          code: "IND",
          name: "India",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        team2: {
          code: "NZ",
          name: "New Zealand",
          toLowerCase: function (): unknown {
            throw new Error("Function not implemented.");
          },
        },
        date: "2025-03-24",
        time: "16:00",
        venue: "Ahmedabad",
        tournament: "Champions Trophy",
        format: "One day",
        isPlayingXIAnnounced: false,
      },
    ];

    setMatches(mockMatches);
    setDisplayedMatches(mockMatches);
  }, []);

  const filterMatches = () => {
    let filtered = [...matches];

    if (searchQuery) {
      filtered = filtered.filter(
        (match) =>
          match.team1.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.team2.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.tournament.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((match) => match.date === selectedDate);
    }

    setDisplayedMatches(filtered);
  };

  useEffect(() => {
    filterMatches();
  }, [searchQuery, selectedDate]);

  const loadMore = () => {
    setVisibleMatches((prev) => prev + 10);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-3 py-8">
          <h1 className="text-3xl text-center hover:text-yellow-400 font-bold text-green-500 dark:text-white mb-6">
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex "
            >
              {/* Main content (3 parts) */}
              <div className="w-3/4 p-6">
                <div className="flex items-center justify-between mb-4">
                  {/* <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {format(
                        parse(match.date, "yyyy-MM-dd", new Date()),
                        "dd MMM"
                      )}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {match.time}
                    </span>
                  </div> */}
                  <span
                    className="pl-3 ml-3 pr-3 py-1 text-xs rounded-full 
                      bg-yellow-400 dark:bg-yellow-50 text-white dark:text-white"
                  >
                    {match.isPlayingXIAnnounced
                      ? "LINEUP OUT"
                      : "Playing XI not announced"}
                  </span>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={match.team1.flag}
                      alt={match.team1.code}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {match.team1.code}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {format(
                          parse(match.date, "yyyy-MM-dd", new Date()),
                          "dd MMM"
                        )}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {match.time}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {match.team2.code}
                    </div>
                    <img
                      src={match.team2.flag}
                      alt={match.team2.code}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-6 space-y-2 md:space-y-0 text-sm text-gray-500 dark:text-gray-400">
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
                  <button className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-300 transition-colors">
                    Match Prediction
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors">
                    Generate Lineups
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-100 text-gray-900 rounded-lg hover:bg-primary-300 transition-colors">
                    Score Prediction
                  </button>
                </div>
              </div>

              {/* Sidebar (1 part) */}
              <div className="w-1/4 bg-gray-100 dark:bg-gray-700 p-6">
                {/* Sidebar content goes here */}
                Sidebar
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

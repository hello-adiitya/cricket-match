export interface CricketMatch {
  id: string;
  team1: {
    code: string;
    name: string;
    flag?: string;
  };
  team2: {
    code: string;
    name: string;
    flag?: string;
  };
  date: string;
  time: string;
  venue: string;
  tournament: string;
  format: string;
  isPlayingXIAnnounced: boolean;
}
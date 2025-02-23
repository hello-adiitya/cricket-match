export interface CricketMatch {
  id: string;
  team1: {
    toLowerCase(): unknown;
    code: string;
    name: string;
    flag?: string;
  };
  team2: {
    toLowerCase(): unknown;
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
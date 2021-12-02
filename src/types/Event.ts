import PlayDate from "./PlayDate";
import Team from "./Team";
import Venue from "./Venue";

export default interface Event {
  id: number;
  score1: number | null;
  score2: number | null;
  date: PlayDate;
  venue: Venue;
  team_1: Team;
  team_2: Team;
}
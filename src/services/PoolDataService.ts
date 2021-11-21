//import axios from "axios";
import http from "../http-common";

/* eslint-disable */
class PoolDataService {
  getCalendar(): Promise<any> {
    return http().get("calendar");
  }

  getResults(): Promise<any> {
    return http().get("results");
  }

  getTeam(id: number): Promise<any> {
    return http().get("team/" + id);
  }

  getTeamList(): Promise<any> {
    return http().get("team_list");
  }

  getSeasons(): Promise<any> {
    return http().get("get_seasons");
  }

  /* postSeason(season: string): Promise<any> {
    axios
      .post("http://parrot.app/api/pool/change_season", { season })
      .then(function (response) {
        console.log(response);
    return response.data.season;
      })
      .catch(function (error) {
        console.log(error);
        return error.message;
      });
  } */
}

export default new PoolDataService();

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

  /* get(id: any): Promise<any> {
    return http().get(`/tutorials/${id}`);
  } */
}

export default new PoolDataService();

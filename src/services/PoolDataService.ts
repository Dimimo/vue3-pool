import http from "../http-common";

/* eslint-disable */
class PoolDataService {
  getCalendar(): Promise<any> {
    return http().get("calendar");
  }

  getResults(): Promise<any> {
    return http().get("results");
  }

  /* get(id: any): Promise<any> {
    return http().get(`/tutorials/${id}`);
  } */
}

export default new PoolDataService();

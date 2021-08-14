import http from "../http-common";

/* eslint-disable */
class PoolDataService {
  getCalendar(): Promise<any> {
    return http().get("calendar");
  }

  /* get(id: any): Promise<any> {
    return http().get(`/tutorials/${id}`);
  } */
}

export default new PoolDataService();


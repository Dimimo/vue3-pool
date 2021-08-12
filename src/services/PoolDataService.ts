import http from "../http-common";

/* export default {
  getcalendar() {
    return http().get("calendar");
  },
}; */

export default (route: string) => {
  switch (route) {
    case "getCalendar": {
      return http({}).get("calendar");
    }
    default: {
      return null;
    }
  }
};

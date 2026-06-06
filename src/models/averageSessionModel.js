import copy from "../utils/copy.json";
const DAY_LABELS = {
  1: copy.monday,
  2: copy.tuesday,
  3: copy.wednesday,
  4: copy.thursday,
  5: copy.friday,
  6: copy.saturday,
  7: copy.sunday,
};

export class AverageSessionsModel {
  constructor(data) {
    this.sessions = data.sessions;
  }

  getChartData() {
    const formattedSessions = this.sessions.map((session) => ({
      day: DAY_LABELS[session.day],
      sessionLength: session.sessionLength,
    }));

  // Todo: replace the first and last hardcoded values with data from previous week and projection
    return [
      {
        day: "",
        sessionLength: formattedSessions[0].sessionLength,
        hidden: true,
      },
      ...formattedSessions,
      {
        day: "",
        sessionLength:
          formattedSessions[formattedSessions.length - 1].sessionLength,
        hidden: true,
      },
    ];
  }
}

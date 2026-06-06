export class WeightControlModel {
  constructor(data) {
    this.sessions = data.sessions.map((session) => new SessionModel(session));
  }

  getChartData() {
    return this.sessions.map((session, index) => ({
      index: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  getWeightAxisDomain() {
    const weights = this.sessions.map((session) => session.kilogram);

    return [Math.min(...weights) - 1, Math.max(...weights) + 1];
  }

  getCaloriesAxisDomain() {
    const calories = this.sessions.map((session) => session.calories);

    return [0, Math.max(...calories)];
  }

  getXAxisTicks() {
    return this.sessions.map((_, index) => index + 1);
  }

  getXAxisdomain() {
    return [1, this.sessions.length];
  }
}

class SessionModel {
  constructor(data) {
    this.kilogram = data.kilogram;
    this.calories = data.calories;
  }
}

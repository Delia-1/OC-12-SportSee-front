import copy from "../utils/copy.json";

export class ActivityRadarModel {
  constructor(data) {
    this.data = data.data;
  }

  getChartData() {
    const KIND_MAP = {
      1: copy.cardio,
      2: copy.energy,
      3: copy.endurance,
      4: copy.strength,
      5: copy.speed,
      6: copy.intensity,
    };

    return [...this.data]
      .map((item) => ({
        value: item.value,
        kind: KIND_MAP[item.kind],
      }))
      .reverse();
  }
}

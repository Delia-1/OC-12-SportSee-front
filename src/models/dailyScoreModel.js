export class DailyScoreModel {
  constructor(score) {
    this.score = score;
  }

  getTodayData() {
    return [
      { name: "score", value: this.score },
      { name: "rest", value: 1 - this.score },
    ];
  }

  getScorePercentage() {
    return Math.round(this.score * 100);
  }
}

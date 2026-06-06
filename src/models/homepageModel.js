import copy from "../utils/copy.json";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";

const calories = "kCal";
const gram = "g";

export class HomepageModel {
  constructor(user) {
    this.user = user;
  }

  getUserFirstName() {
    return this.user.userInfos.firstName;
  }

  getTodayScore() {
    return this.user.todayScore ?? this.user.score;
  }

  getNutritionCards() {
    return [
      {
        name: copy.calories,
        mesure: calories,
        value: this.user.keyData.calorieCount,
        icon: energy,
        bgColor: "#FF00001A",
      },
      {
        name: copy.proteins,
        mesure: gram,
        value: this.user.keyData.proteinCount,
        icon: chicken,
        bgColor: "#4AB8FF1A",
      },
      {
        name: copy.carbohydrates,
        mesure: gram,
        value: this.user.keyData.carbohydrateCount,
        icon: apple,
        bgColor: "#F9CE231A",
      },
      {
        name: copy.lipids,
        mesure: gram,
        value: this.user.keyData.lipidCount,
        icon: cheeseburger,
        bgColor: "#FD51811A",
      },
    ];
  }
}

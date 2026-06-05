import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";
import copy from "../../utils/copy.json";

const NutritionCard = ({ amount, type }) => {
  let name = "";
  let icon = "";
  let bgColor = "";
  let mesure = "";

  const calories = "kCal";
  const gram = "g";

  switch (type) {
    case "calorieCount":
      name = copy.calories;
      icon = energy;
      bgColor = "#FF00001A";
      mesure = calories;
      break;
    case "proteinCount":
      name = copy.proteins;
      icon = chicken;
      bgColor = "#4AB8FF1A";
      mesure = gram;
      break;
    case "carbohydrateCount":
      name = copy.carbohydrates;
      icon = apple;
      bgColor = "#F9CE231A";
      mesure = gram;
      break;
    case "lipidCount":
      name = copy.lipids;
      icon = cheeseburger;
      bgColor = "#FD51811A";
      mesure = gram;

      break;
    default:
      console.log(`Donnée nutritionnelle inconnue: ${type}`);
  }

  return (
    <div className="nutrition-card">
      <div
        className="nutrition-card__icon-container"
        style={{ backgroundColor: bgColor }}
      >
        <img src={icon} alt={name} />
      </div>
      <div className="nutrition-card__infos">
        <p className="amount">
          {amount}
          {mesure}
        </p>
        <p className="type">{name}</p>
      </div>
    </div>
  );
};

export default NutritionCard;

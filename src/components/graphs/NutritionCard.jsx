import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";

const NutritionCard = ({ amount, type }) => {
  let name = "";
  let icon = "";
  let bgColor = "";

  switch (type) {
    case "calorieCount":
      name = "Calories";
      icon = energy;
      bgColor = "#FF00001A";
      break;
    case "proteinCount":
      name = "Proteines";
      icon = chicken;
      bgColor = "#4AB8FF1A";
      break;
    case "carbohydrateCount":
      name = "Glucides";
      icon = apple;
      bgColor = "#F9CE231A";
      break;
    case "lipidCount":
      name = "Lipides";
      icon = cheeseburger;
      bgColor = "#FD51811A";

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
        <p className="amount">{amount}</p>
        <p className="type">{name}</p>
      </div>
    </div>
  );
};

export default NutritionCard;

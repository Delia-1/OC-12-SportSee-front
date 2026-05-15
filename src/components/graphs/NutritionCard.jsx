import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";

const NutritionCard = ({ amount, type }) => {
  let name = "";
  let icon = "";

  switch (type) {
    case "calorieCount":
      name = "Calories";
      icon = energy;
      break;
    case "proteinCount":
      name = "Proteines";
      icon = chicken;
      break;
    case "carbohydrateCount":
      name = "Glucides";
      icon = apple;
      break;
    case "lipidCount":
      name = "Lipides";
      icon = cheeseburger;
      break;
    default:
      console.log(`Donnée nutritionnelle inconnue: ${type}`);
  }

  return (
    <div className="nutrition-card">
      <img src={icon} alt={name} />
      <div className="nutrition-card__infos">
        <p className="amount">{amount}</p>
        <p className="type">{name}</p>
      </div>
    </div>
  );
};

export default NutritionCard;

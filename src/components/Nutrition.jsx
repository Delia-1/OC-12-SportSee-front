import NutritionCard from "./graphs/NutritionCard";

const Nutrition = ({ nutritionCards }) => {
  return (
    <div className="nutrition-container">
      {nutritionCards.map((card) => (
        <NutritionCard key={card.name} card={card} />
      ))}
    </div>
  );
};

export default Nutrition;

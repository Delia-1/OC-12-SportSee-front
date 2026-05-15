import NutritionCard from "./graphs/NutritionCard";

const Nutrition = ({ nutritionData }) => {
  return (
    <div className="nutrition-container">
      {Object.entries(nutritionData).map(([key, value]) => (
        <NutritionCard key={key} amount={value} type={key} />
      ))}
    </div>
  );
};

export default Nutrition;

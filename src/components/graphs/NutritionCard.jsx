const NutritionCard = ({ card }) => {
  const { bgColor, icon, value, mesure, name } = card;
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
          {value}
          {mesure}
        </p>
        <p className="type">{name}</p>
      </div>
    </div>
  );
};

export default NutritionCard;

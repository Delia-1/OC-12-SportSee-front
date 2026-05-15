const DailyScore = ({ todayScore }) => {
  return (
    <div>
      <h3>Daily score:</h3>
      <p>{`score.: ${todayScore}`}</p>
    </div>
  );
};

export default DailyScore;

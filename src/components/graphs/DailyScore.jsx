import { useEffect, useState } from "react";
import { getUserByApi } from "../../mockedApi";
// import { getActivityByApi } from "../../mockedApi";

const DailyScore = ({ user }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      const activityData = await getUserByApi(user);
      // const activityData = await getUser(user);

      setScore(activityData);
      setLoading(false);
    };
    fetchScore();
  }, [user]);

  if (loading) return <p>Chargement...</p>;
  if (!score) return <p>Aucune donnée d'activité</p>;

  console.log("score", score);
  const todayScore =
    score.todayScore === undefined ? score.score : score.todayScore;

  return (
    <div>
      <h3>Daily score:</h3>
      <p>{`score.: ${todayScore}`}</p>
    </div>
  );
};

export default DailyScore;

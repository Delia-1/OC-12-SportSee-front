import Welcome from "../components/Welcome";
import WeightControl from "../components/graphs/WeightControl";

import { useState } from "react";
import { getUser, getUserByApi } from "../mockedApi";
import { useFetchData } from "../utils/useFetchData";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AverageSession from "../components/graphs/AverageSessions";
import ActivityRadar from "../components/graphs/ActivityRadar";
import DailyScore from "../components/graphs/DailyScore";
import Nutrition from "../components/Nutrition";

const Homepage = () => {
  const { userId } = useParams();
  const [isMockedApi, setIsMockedApi] = useState(true);
  const navigate = useNavigate();

  const {
    data: user,
    loading,
    error,
  } = useFetchData(userId, isMockedApi, getUser, getUserByApi);

  if (loading && !user) return <p>Chargement...</p>;
  if (error) return <p>Erreur</p>;

  const nutritionData = user.keyData;

  const todayScore =
    user.todayScore === undefined ? user.score : user.todayScore;

  let id = Number(userId) === 12 ? 18 : 12;

  return (
    <main>
      <section className="welcome-section">
        <Welcome user={user} />
      </section>
      {/* d-block ici */}
      <div className="graphs-section">
        <div className="rows-container">
          <section className="rows-container__first">
            <WeightControl userId={userId} isMockedApi={isMockedApi} />
          </section>
          <section className="rows-container__last">
            <AverageSession
              className="graph-card"
              userId={userId}
              isMockedApi={isMockedApi}
            />
            <ActivityRadar
              className="graph-card"
              userId={userId}
              isMockedApi={isMockedApi}
            />
            <DailyScore
              className="graph-card"
              todayScore={todayScore}
              isMockedApi={isMockedApi}
            />
          </section>
        </div>

        <section className="graphs-section__nutrition">
          {/* je dois faire un map */}
          <Nutrition nutritionData={nutritionData} isMockedApi={isMockedApi} />
          {/* * cards categories: calories proteine lipide glucide */}
        </section>
      </div>
      <div className="switch-section">
        <button
          className="switch-section__button"
          onClick={() => setIsMockedApi(!isMockedApi)}
        >
          Switch to {isMockedApi ? "Real api" : "Mocked api"}
        </button>
        <button
          className="switch-section__button"
          onClick={() => navigate(`/user/${id}`)}
        >
          Switch to user {Number(userId) === 12 ? "18" : "12"}
        </button>
      </div>
    </main>
  );
};
export default Homepage;

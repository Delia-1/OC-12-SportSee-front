import { useState } from "react";
import { getUser, getUserByApi } from "../mockedApi";
import { useFetchData } from "../utils/useFetchData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import copy from "../utils/copy.json";
import { HomepageModel } from "../models/homepageModel";
import Welcome from "../components/Welcome";
import WeightControl from "../components/graphs/WeightControl";
import AverageSession from "../components/graphs/AverageSessions";
import ActivityRadar from "../components/graphs/ActivityRadar";
import DailyScore from "../components/graphs/DailyScore";
import Nutrition from "../components/Nutrition";
import ErrorPage from "./ErrorPage";

const Homepage = () => {
  const { userId } = useParams();
  const [isMockedApi, setIsMockedApi] = useState(true);
  const navigate = useNavigate();

  const {
    data: user,
    loading,
    error,
  } = useFetchData(userId, isMockedApi, getUser, getUserByApi);

  if (loading && !user) return <p>{copy.loading}</p>;
  if (error) return <ErrorPage errorType="api"/>;
  if (!user?.userInfos?.firstName) {
    console.log("utilisateur introuvable ou données invalides");
     return <ErrorPage errorType="user" />;
  }

  const model = new HomepageModel(user);

  let id = Number(userId) === 12 ? 18 : 12;

  return (
    <main>
      <section className="welcome-section">
        <Welcome userFirstName={model.getUserFirstName()} />
      </section>
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
              todayScore={model.getTodayScore()}
              isMockedApi={isMockedApi}
            />
          </section>
        </div>

        <section className="graphs-section__nutrition">
          {/* je dois faire un map */}
          <Nutrition
            nutritionCards={model.getNutritionCards()}
            isMockedApi={isMockedApi}
          />
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

import Welcome from "../components/Welcome";
import WeightControl from "../components/graphs/WeightControl";

import { useEffect, useState } from "react";
import { getUser, getUserByApi } from "../mockedApi";

import { useParams } from "react-router-dom";
import AverageSession from "../components/graphs/AverageSessions";
import ActivityRadar from "../components/graphs/ActivityRadar";
import DailyScore from "../components/graphs/DailyScore";
import Nutrition from "../components/Nutrition";

const Homepage = () => {
  const { userId } = useParams();
  const [user, setUSer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMockedApi, setIsMockedApi] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = isMockedApi
        ? await getUser(userId)
        : await getUserByApi(userId);
      setUSer(userData);
      setLoading(false);
    };
    fetchUser();
  }, [userId, isMockedApi]);

  if (loading) return <p>Chargement...</p>;
  const nutritionData = user.keyData;
  if (!user) return <p>Utilisateur introuvable</p>;

  const todayScore =
    user.todayScore === undefined ? user.score : user.todayScore;

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
      <button onClick={() => setIsMockedApi(!isMockedApi)}>
        switch to {isMockedApi ? "Real api" : "Mocked api"}
      </button>
    </main>
  );
};
export default Homepage;

// ClassName: séparer container pour avoir une classe reutilisable de conteneur basique
// Section: Verifier que se soit le plus adapter pour l'accessibilité

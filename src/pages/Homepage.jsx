import Welcome from "../components/Welcome";
import Card from "../components/Card";
import WeightControl from "../components/graphs/WeightControl";

import { useEffect, useState } from "react";
// import { getUserByApi } from "../mockedApi";
import { getUser } from "../mockedApi";

import { useParams } from "react-router-dom";

const Homepage = () => {
  const { userId } = useParams();
  const [user, setUSer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // const userData = await getUserByApi(userId);
      const userData = await getUser(userId);

      console.log("userData", userData);
      setUSer(userData);
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  if (loading) return <p>Chargement...</p>;
  if (!user) return <p>Utilisateur introuvable</p>;

  return (
    <main>
      <section className="welcome-section">
        <Welcome user={user} />
      </section>
      {/* d-block ici */}
      <div className="graphs-section">
        <div className="rows-container">
          <section className="rows-container__first">
            <WeightControl user={userId} />
          </section>
          <section className="rows-container__last">
            {/* <Objectif /> */}
            <Card />
            <Card />
            <Card />
            {/* <Radar /> */}
            {/* <Kpi /> */}
          </section>
        </div>

        <section className="graphs-section__nutrition">
          {/* je dois faire un map */}
          {/* <Nutrion /> */}
          {/* * cards categories: calories proteine lipide glucide */}
        </section>
      </div>
    </main>
  );
};
export default Homepage;

// ClassName: séparer container pour avoir une classe reutilisable de conteneur basique
// Section: Verifier que se soit le plus adapter pour l'accessibilité

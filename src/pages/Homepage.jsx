import Welcome from "../components/Welcome";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <main>
      <section className="welcome-section">
        <Welcome />
      </section>
      {/* d-block ici */}
      <div className="graphs-section">
        <div className="rows-container">
          <section className="rows-container__first">{/* <Poids /> */}</section>
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

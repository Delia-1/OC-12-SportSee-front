import Welcome from "../components/Welcome";

const Homepage = () => {
  return (
    <main>
      <section className="welcome-section">
        <Welcome />
      </section>
      {/* d-block ici */}
      <div className="graphs-container">
        <section>{/* <Poids /> */}</section>
        <section>
          {/* <Objectif /> */}
          {/* <Radar /> */}
          {/* <Kpi /> */}
        </section>
        <section>
          {/* map */}
          {/* <Nutrion /> */}
          {/* * calories proteine lipide glucide */}
        </section>
      </div>
    </main>
  );
};
export default Homepage;

// ClassName: séparer container pour avoir une classe reutilisable de conteneur basique
// Section: Verifier que se soit le plus adapter pour l'accessibilité

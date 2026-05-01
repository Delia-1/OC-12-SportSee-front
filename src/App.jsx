import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="horizontal-container">
        <Sidebar />
        <main>
          <section className="welcome">
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
      </div>
    </div>
  );
}

export default App;

// ClassName: séparer container pour avoir une classe reutilisable de conteneur basique
// Section: Verifier que se soit le plus adapter pour l'accessibilité

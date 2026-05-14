import { useEffect, useState } from "react";
// import { getAverageSessions } from "../../mockedApi";
import { getAverageSessionsByApi } from "../../mockedApi";

const AverageSession = ({ user }) => {
  const [averageSessions, setAverageSessions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      const averageSessionsData = await getAverageSessionsByApi(user);
      // const averageSessionsData = await getAverageSessions(user);

      setAverageSessions(averageSessionsData);
      setLoading(false);
    };
    fetchAverageSessions();
  }, [user]);

  if (loading) return <p>Chargement...</p>;
  if (!averageSessions) return <p>Aucune donnée d'activité</p>;

  return (
    <div>
      <h3>Session 1</h3>
      <p className="test-test">{`day: ${averageSessions.sessions[0].day}`}</p>
      <p>{`Lenght: ${averageSessions.sessions[0].sessionLength}`}</p>
    </div>
  );
};

export default AverageSession;

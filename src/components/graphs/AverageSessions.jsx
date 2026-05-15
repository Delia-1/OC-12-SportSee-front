import { useEffect, useState } from "react";
import { getAverageSessions, getAverageSessionsByApi } from "../../mockedApi";

const AverageSession = ({ userId, isMockedApi }) => {
  const [averageSessions, setAverageSessions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      const averageSessionsData = isMockedApi
        ? await getAverageSessions(userId)
        : await getAverageSessionsByApi(userId);

      setAverageSessions(averageSessionsData);
      setLoading(false);
    };
    fetchAverageSessions();
  }, [userId, isMockedApi]);

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

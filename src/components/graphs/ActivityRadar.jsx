import { useEffect, useState } from "react";
import { getPerformanceByApi } from "../../mockedApi";

const ActivityRadar = ({ user }) => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      // const performanceData = await getPerformance(user);
      const performanceData = await getPerformanceByApi(user);

      setPerformance(performanceData);
      setLoading(false);
    };
    fetchPerformance();
  }, [user]);

  if (loading) return <p>Chargement...</p>;
  if (!performance) return <p>Aucune donnée d'activité</p>;

  const sports = performance.kind;
  console.log("perfo kind", sports, typeof sport);

  return (
    <div>
      <ul>
        <h3>Sports</h3>
        {Object.values(sports).map((sport, index) => (
          <li key={`${index}-${sport}`}>{sport}</li>
        ))}
      </ul>
      {/* <p className="test-test">{`day: ${averageSessions.sessions[0].day}`}</p>
      <p>{`Lenght: ${averageSessions.sessions[0].sessionLength}`}</p> */}
    </div>
  );
};

export default ActivityRadar;

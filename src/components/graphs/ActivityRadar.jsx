import { useEffect, useState } from "react";
import { getPerformance, getPerformanceByApi } from "../../mockedApi";

const ActivityRadar = ({ userId, isMockedApi }) => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      // const performanceData = await getPerformance(user);
      const performanceData = isMockedApi
        ? await getPerformance(userId)
        : await getPerformanceByApi(userId);

      setPerformance(performanceData);
      setLoading(false);
    };
    fetchPerformance();
  }, [userId, isMockedApi]);

  if (loading) return <p>Chargement...</p>;
  if (!performance) return <p>Aucune donnée d'activité</p>;

  const sports = performance.kind;

  return (
    <div>
      <ul>
        <h3>Sports</h3>
        {Object.values(sports).map((sport, index) => (
          <li key={`${index}-${sport}`}>{sport}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityRadar;

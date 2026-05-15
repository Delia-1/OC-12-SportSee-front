import { useEffect, useState } from "react";
import { getActivity, getActivityByApi } from "../../mockedApi";

const WeightControl = ({ userId, isMockedApi }) => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = isMockedApi
        ? await getActivity(userId)
        : await getActivityByApi(userId);

      setActivity(activityData);
      setLoading(false);
    };
    fetchActivity();
  }, [userId, isMockedApi]);

  if (loading) return <p>Chargement...</p>;
  if (!activity) return <p>Aucune donnée d'activité</p>;

  return (
    <div>
      <h3>Session 1</h3>
      <p className="test">{`day: ${activity.sessions[0].day}`}</p>
      <p>{`kg: ${activity.sessions[0].kilogram}`}</p>
      <p>{`Calories:: ${activity.sessions[0].calories}`}</p>
    </div>
  );
};

export default WeightControl;

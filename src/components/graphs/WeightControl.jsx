import { useEffect, useState } from "react";
import { getActivity } from "../../mockedApi";
// import { getActivityByApi } from "../../mockedApi";

const WeightControl = ({ user }) => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      // const activityData = await getActivityByApi(user);
      const activityData = await getActivity(user);

      setActivity(activityData);
      setLoading(false);
    };
    fetchActivity();
  }, [user]);

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

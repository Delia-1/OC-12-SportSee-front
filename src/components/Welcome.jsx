import { useEffect, useState } from "react";
import { getUser } from "../mockedApi";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { userId } = useParams();
  const [user, setUSer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(userId);
      setUSer(userData);
      setLoading(false);
    };
    fetchUser();
  }, [userId]);
  if (loading) return <p>Chargement...</p>;
  if (!user) return <p>Utilisateur introuvable</p>;

  const userFirstName = user.userInfos.firstName;

  return (
    <div className="welcome">
      <h1 className="welcome__title">
        Bonjour
        <span className="welcome__title--span"> {userFirstName}</span>
      </h1>
      <p className="welcome__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Welcome;

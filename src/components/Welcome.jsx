import { getUser } from "../mockedApi";

const user = await getUser(12);

const Welcome = () => {
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

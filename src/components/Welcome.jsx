import copy from "../utils/copy.json";
const Welcome = ({ userFirstName }) => {
  // const userFirstName = user.userInfos.firstName;

  return (
    <div className="welcome">
      <h1 className="welcome__title">
        {copy.hello}
        <span className="welcome__title--span"> {userFirstName}</span>
      </h1>
      <p className="welcome__message">{copy.congratsMessage}</p>
    </div>
  );
};

export default Welcome;

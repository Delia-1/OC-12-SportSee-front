import { getActivity, getUser } from "../mockedApi";

const dataUser = await getUser(12);
console.log("coucou", dataUser.userInfos.firstName);

const dataActivity = await getActivity(12);
console.log("activity", dataActivity.sessions[0].day);

const Header = () => {
  return <div className="container-header">header</div>;
};

export default Header;

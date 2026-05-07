import { getActivity, getUser } from "../mockedApi";
import logoSportSee from "../assets/logoSportSee.svg";

const links = ["Acceuil", "Profil", "Réglage", "Communauté"];

const dataUser = await getUser(12);
console.log("coucou", dataUser.userInfos.firstName);

const dataActivity = await getActivity(12);
console.log("activity", dataActivity.sessions[0].day);

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={logoSportSee} alt="logo site" />
      </div>
      <nav className="header__nav">
        {links.map((link, index) => (
          <a key={`${index}-${link}`} className="header__navLink" href="">
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;

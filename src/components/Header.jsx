import logoSportSee from "../assets/logoSportSee.svg";
import copy from "../utils/copy.json";

const links = [copy.homepage, copy.profile, copy.settings, copy.community];

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

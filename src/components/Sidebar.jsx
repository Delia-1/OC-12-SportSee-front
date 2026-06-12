import yoga from "../assets/yoga.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";
import lift from "../assets/lift.svg";

const Sidebar = () => {
  const sportTiles = [
    { name: "yoga", icon: yoga },
    { name: "swim", icon: swim },
    { name: "bike", icon: bike },
    { name: "lift", icon: lift },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        {sportTiles.map((tile, index) => (
          <a className="sidebar__link" href="" key={`${index}-${tile.name}`}>
            <img
              // key={`${index}-${tile.name}`}
              className="sidebar__tile"
              src={tile.icon}
              alt={`${tile.name} icon`}
            />
          </a>
        ))}
      </div>
      <small className="sidebar__copyright">Copiryght, SportSee 2020</small>
    </div>
  );
};

export default Sidebar;

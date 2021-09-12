import "../topbar/topbar.module.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications, StarRate } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <Link to="/">
        <img className="topbarLeft" src="assets/logo-sp.png" alt="" />
      </Link>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Procurar parceiro, demanda ou oferta"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/community" className="topbarLink">
          <span>Comunidade</span>
        </Link>
          {/* <span className="topbarLink">Timeline</span> */}
        </div>
        {/* <span className="topbarLinkRate">Avaliação </span> */}
        <div className="topbarIconRate">
          <StarRate fontSize="large"/>
          <span className="topbarIconBadgeRate">4.8</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />
        </Link>
      </div>
    </div>
  );
}

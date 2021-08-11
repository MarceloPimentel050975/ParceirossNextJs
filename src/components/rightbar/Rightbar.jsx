import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Danilo Carlotti</b> e <b>3 outros amigos</b> finalizaram um serviço.
          </span>
        </div>
        <img className="rightbarAd" src="assets/tech.jpeg" alt="" />
        <h4 className="rightbarTitle">Amigos Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Perfil</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Habilidades Profissionais:</span>
            <span className="rightbarInfoValue">Eletricista</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Cidade:</span>
            <span className="rightbarInfoValue">São Paulo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Comunidade:</span>
            <span className="rightbarInfoValue">Ó/Brasilândia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Interesses:</span>
            <span className="rightbarInfoValue">Projetos de longo Prazo</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Seguindo</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Danilo Carlotti</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Darth Vader</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Chuwbacca</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Luke Skywalker</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/44.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Suzy Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Lex Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

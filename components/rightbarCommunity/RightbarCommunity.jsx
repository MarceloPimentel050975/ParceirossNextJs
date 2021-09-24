import "../rightbarCommunity/rightbarCommunity.module.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ community }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Danilo Carlotti</b> e <b>3 outros amigos</b> finalizaram um serviço.
          </span>
        </div>
        <img className="rightbarAd" src="assets/tech.png" alt="" />
        <h4 className="rightbarTitle">Parceiros Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const CommunityRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Perfil</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">localidade:</span>
            <span className="rightbarInfoValue">Zona Norte</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Cidade:</span>
            <span className="rightbarInfoValue">São Paulo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Comunidade:</span>
            <span className="rightbarInfoValue">Pedreira</span>
          </div>
          {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Interesses:</span>
            <span className="rightbarInfoValue">Projetos de longo Prazo</span>
          </div> */}
        </div>
        <h4 className="rightbarTitle">Comunidades Parceiras</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/community/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Quilombola</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/community/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Madalena</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/community/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">São Jorge</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/community/7.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Barroca</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/community/8.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Vila prel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/community/9.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Morro grande</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {community ? <CommunityRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

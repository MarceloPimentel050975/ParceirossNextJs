import "../community/community.module.css";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import FeedCommunity from "../../../components/feedCommunity/FeedCommunity";
import RightbarCommunity from "../../../components/rightbarCommunity/RightbarCommunity";

function community() {
  return (
    <>
      <Topbar />
      <div className="community">
        <Sidebar />
        <div className="communityRight">
          <div className="communityRightTop">
            <div className="communityCover">
              <img
                className="communityCoverImg"
                src="assets/community/banner.jpeg"
                alt=""
              />
              <img
                className="communityUserImg"
                src="assets/community/1.jpeg"
                alt=""
              />
            </div>
            <div className="communityInfo">
                <h4 className="communityInfoName">Pedreira</h4>
                <span className="communityInfoDesc">Comunidade Parceira</span>
            </div>
          </div>
          <div className="communityRightBottom">
            <FeedCommunity />
            <RightbarCommunity community/>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = "";

  // Pass data to the page via props
  return { props: { data } }
}

export default community;
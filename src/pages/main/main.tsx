import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import FeedHome from "../../../components/feedHome/FeedHome";
import Rightbar from "../../../components/rightbar/Rightbar";
import { InferGetServerSidePropsType } from "next";

function Main(props) {
  return (
    
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <FeedHome/>
      </div>
    </>
  );
}
export default Main;
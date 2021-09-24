import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import FeedHome from "../../../components/feedHome/FeedHome";
import Rightbar from "../../../components/rightbar/Rightbar";
import { InferGetServerSidePropsType } from "next";

function Main(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <FeedHome/>
        <Rightbar profile = {true}/>
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

export default Main;
import PostHome from "../postHome/PostHome";
import Share from "../share/Share";
import "./feedHome.css";
import { HomePosts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {HomePosts.map((ph) => (
          <PostHome key={ph.id} post={ph} />
        ))}
      </div>
    </div>
  );
}

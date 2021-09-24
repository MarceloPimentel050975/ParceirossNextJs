import PostCommunity from "../postCommunity/PostCommunity";
import ShareCommunity from "../shareCommunity/ShareCommunity";
import "../feedCommunity/feedCommunity.module.css";
import { PostCommunities } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <ShareCommunity />
        {PostCommunities.map((pc) => (
          <PostCommunity key={pc.id} post={pc} />
        ))}
      </div>
    </div>
  );
}

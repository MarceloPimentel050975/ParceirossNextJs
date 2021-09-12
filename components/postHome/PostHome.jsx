import "../postHome/postHome.module.css";
import { MoreVert, Check } from "@material-ui/icons";
import { HomeUsers } from "../../dummyData";
import { useState } from "react";

export default function PostHome({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={HomeUsers.filter((hu) => hu.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {HomeUsers.filter((hu) => hu.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <div className="postCheck">
              <Check/> 
              <span className="postCheckText">Trabalho concluído</span>
            </div>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


function PostCommunity({ posts }) {
  return (
    <ul>
      { posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </ul>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { posts:data },
  }
}
 
export default PostCommunity
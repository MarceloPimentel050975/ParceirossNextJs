import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles( ( theme ) => ( {
  root: {
    maxWidth: 535,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
   submit: {
    margin: theme.spacing(3, 0, 2),
  },
   formControl: {
     margin: theme.spacing(3, 0, 2),
  }, 
}));

const fetcher = (url) => fetch(url).then((res) => res.json())


const  PostCommunity = () => {

  const classes = useStyles();
  const { data, error } = useSWR('/api/posts/list', fetcher);
  const [loading, setLoading] = useState(false);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data);

  return (
     <div>
      {data.map((post) => (
        <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        title={post.title}
        subheader={post.type}
      />
      <CardContent>
          <Typography>
          </Typography>
       </CardContent>
      </Card>
      )) }

     </div>
    )
}



export default PostCommunity
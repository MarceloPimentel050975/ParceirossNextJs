import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import prisma from '../../lib/prisma';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


const  PostCommunity = () => {
  const { data, error } = useSWR('/api/posts/posts', fetcher);
  const [loading, setLoading] = useState(false);

 if (loading) {
    return <p>Data is loading...</p>;
  }


  return (
   <>
   </>
  )
}



export default PostCommunity
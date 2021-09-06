import React from 'react';
import {useSelector} from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';


const Posts=({setCurrentId})=>{
const classes=useStyles();
const posts=useSelector(state=>state.posts);
console.log(posts);
    return(
        !posts.length?<CircularProgress key={Math.random()}/>:(
            <Grid  key={Math.random()} className={classes.container} container alignItems="stretch" spacing={3}>
               {posts.map(post=>(
                   
                   <Grid key={post.id} item xs={12} sm={6}>
                       <Post post={post} key={post.id} setCurrentId={setCurrentId}/>
                   </Grid>
               ))}
            </Grid>
        )
    ); 
};

export default Posts;
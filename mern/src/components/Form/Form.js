import React,{useState,useEffect} from 'react';
import Filebase from 'react-file-base64';
import useStyles from './styles';

import {TextField,Button,Typography,Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {createPost,updatePost} from '../../actions/post';


const Form=({currentId,setCurrentId})=>{
    const classes=useStyles();
    const post=useSelector(state=>currentId?state.posts.find(p=>p._id===currentId):null);
    const dispatch=useDispatch();
    const [postsData,setPostsData]=useState({
        creater:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''

    });
        useEffect(()=>{
        if(post) setPostsData(post)
    },[post]);

    const clear=()=>{
      setCurrentId(null);
      setPostsData({creator:'',title:'',message:'',tags:'',selectedFile:''});
    };
    const handleSubmit=(e)=>{
       e.preventDefault();
       if(currentId){
           dispatch(updatePost(currentId,postsData))
       }else{
             dispatch(createPost(postsData));

       }
       clear();
    };
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId?'Editing':'Creating'} a Memory</Typography>
        <TextField name="creator"
         variant="outlined" label="Creator"
         value={postsData.creator}
         onChange={(e)=>setPostsData({...postsData,creater:e.target.value})}
          fullWidth/>
        <TextField name="title"
         variant="outlined" label="Title"
         value={postsData.title}
         onChange={(e)=>setPostsData({...postsData,title:e.target.value})}
          fullWidth/>
        <TextField name="message"
         variant="outlined" label="Message"
         value={postsData.message}
         onChange={(e)=>setPostsData({...postsData,message:e.target.value})}
          fullWidth/>
        <TextField name="tags"
         variant="outlined" label="Tags"
         value={postsData.tags}
         onChange={(e)=>setPostsData({...postsData,tags:e.target.value.split(',')})}
          fullWidth/>

          <div className={classes.fileInput}>
           <Filebase
               type="file"
               multiple={false}
               onDone={({base64})=>setPostsData({...postsData,selectedFile:base64})}
           />
              
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button  variant="contained" color="secondary" size="small"
                     onClick={clear} fullWidth >Clear</Button>

        </form>


        </Paper>
    );
};

export default Form;
import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';

import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {getPosts} from './actions/post';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/1.png';
import useStyles from './style';


const App=()=> {
    const [currentId,setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);
    return (
        <Container maxWidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit">
           <Typography className={classes.heading} variant="h2" align="center">Memmories</Typography>
           <img className={classes.image} src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow>
        <Container style={{visibility:'visible',opacity:1}}>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                 <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Form  setCurrentId={setCurrentId} currentId={currentId}/>
                </Grid>

            </Grid>
        </Container>


        </Grow>

        </Container>
    );
}
export default App;
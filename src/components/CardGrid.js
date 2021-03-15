import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Top20 } from '../assets/TopMovie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 100,
  },
  Xla: {
    marginLeft: "100px",
  },
  la: {
    marginLeft: "90px",
  },
  Me: {
    marginLeft: "80px",
  },
  Sm: {
    marginLeft: "70px",
  },
  Els: {
    marginLeft: "0px",
  },
}));

export default function CardGrid(props) {
  const classes = useStyles();

  const XL = useMediaQuery('(min-width:1700px)');
  const L = useMediaQuery('(min-width:1500px)');
  const M = useMediaQuery('(min-width:1000px)');
  const S = useMediaQuery('(min-width:700px)');


  if(XL){
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
              {
                props.Moviedet.map((Movies,index) => {
                  return(
                    <Grid item className = {classes.Xla} >
                      <Cards Theme={props.Theme} Moviedet={Movies}/>
                    </Grid>
                  );
                })
              }
          </Grid>
        </Grid>
      </Grid>
    );
  }else if(L){
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
          {
                props.Moviedet.map((Movies,index) => {
                  return(
                    <Grid item className = {classes.la} >
                      <Cards Theme={props.Theme} Moviedet={Movies}/>
                    </Grid>
                  );
                })
              }
          </Grid>
        </Grid>
      </Grid>
    );
  }else if(M){
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
             {
                props.Moviedet.map((Movies,index) => {
                  return(
                    <Grid item className = {classes.Me} >
                      <Cards Theme={props.Theme} Moviedet={Movies}/>
                    </Grid>
                  );
                })
              }
          </Grid>
        </Grid>
      </Grid>
    );
  }else if(S){
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
              {
                props.Moviedet.map((Movies,index) => {
                  return(
                    <Grid item className = {classes.Sm} >
                      <Cards Theme={props.Theme} Moviedet={Movies}/>
                    </Grid>
                  );
                })
              } 
          </Grid>
        </Grid>
      </Grid>
    );
  }else{
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item className = {classes.Els} >
                <Cards Theme={props.Theme} Moviedet={props.Moviedet}/>
            </Grid>
                  
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Cards from './Cards';

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
  ite: {
      marginLeft: "4.2vw",
  },
}));

export default function CardGrid(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
            <Grid item className = {classes.ite} >
              <Cards Theme={props.Theme}/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

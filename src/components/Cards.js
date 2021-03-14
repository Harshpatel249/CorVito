import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import poster from '../assets/poster.jpg';

//Stylesheet
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    position: 'relative',
    marginLeft: 0,
    transition: "all 0.2s ease-in-out",
    
    "&:hover": {
      boxShadow: "0 5px 15px #e2405f",
    },
  },
  media: {
    height:200,
  },
  space: {
    margin : 8,
    marginTop: 0,
    border: 0,
    paddingTop:0,
    paddingBottom:0,
  },
  typo: {
    margin: 0,
    border: 0,
    padding :0,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  //Render Return
  return (
    <Card className={classes.root} style={{backgroundColor: props.Theme.body, color: props.Theme.text, border: "0.1px solid rgba(211, 211, 211, 0.397)", borderRadius: "5px"}}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image = {poster}
            title = "poster"
        />
        <CardContent>
          <Typography className={classes.typo} gutterBottom variant="h12" component="h5">
            Movie Name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton className={classes.space} style={{color: props.Theme.text}}>
            <AddCircleIcon />
        </IconButton>
        <IconButton className={classes.space} style={{color: props.Theme.text}}>
            <GradeIcon />
        </IconButton>
        <Typography className={classes.space} style={{color: props.Theme.text}}> 
            8.0
        </Typography>
      </CardActions>
    </Card>
  );
}

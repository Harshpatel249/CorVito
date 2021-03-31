import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import Tooltip from '@material-ui/core/Tooltip';
import { PinDropSharp } from '@material-ui/icons';

//Stylesheet
const useStyles = makeStyles({
  root: {
    width: '200px',
    position: 'relative',
    marginLeft: 0,
    transition: "all 0.2s ease-in-out",
    
    "&:hover": {
      boxShadow: "0 5px 15px #61a5c2",
    },
  },
  media: {
    height:'250px',
  },
  space: {
    margin : '10px',
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
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12em",
        color: "yellow",
        backgroundColor: "red"
      }
    }
  }
});



export default function Cards(props) {
  const classes = useStyles();

  const NewTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: props.Theme.body,
      color: props.Theme.text,
      boxShadow: theme.shadows[1],
      fontSize: 18,
    },
  }))(Tooltip);
  
  //Render Return
  return (
    <Card className={classes.root} style={{backgroundColor: props.Theme.cc, color: props.Theme.ct, border: "0.1px solid rgba(211, 211, 211, 0.397)", borderRadius: "5px"}}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image = {props.Moviedet.Poster}
            title = "poster"
        />
        <CardContent>
        <NewTooltip title={props.Moviedet.MovieName} placement="top" className={classes.tooltip}>
          <Typography className={classes.typo} gutterBottom variant="h12" component="h6" style={{textOverflow:"ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
            {props.Moviedet.MovieName}
          </Typography>
          </NewTooltip>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Tooltip title="Add to watchlist" className={classes.tooltip}>
        <IconButton className={classes.space} style={{color: props.Theme.ct}}>
            <AddCircleIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Add rating" className={classes.tooltip}>
        <IconButton className={classes.space} style={{color: props.Theme.ct}}>
            <GradeIcon />
        </IconButton>
        </Tooltip>
        <Typography className={classes.space} style={{color: props.Theme.ct}}> 
            {props.Moviedet.Rating}
        </Typography>
      </CardActions>
    </Card>
  );
}

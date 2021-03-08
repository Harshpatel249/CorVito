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

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    position: 'relative',
    marginLeft: 0,
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

  return (
    <Card className={classes.root}>
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
        <IconButton className={classes.space}>
            <AddCircleIcon />
        </IconButton>
        <IconButton className={classes.space}>
            <GradeIcon />
        </IconButton>
        <Typography className={classes.space}> 
            8.0
        </Typography>
      </CardActions>
    </Card>
  );
}

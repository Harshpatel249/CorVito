import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '150px',
    marginRight: '150px',
    height: '300px',
    "&:hover": {
      boxShadow: "0 5px 15px #e2405f",
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 151,
    minLength: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft:50,
    marginBottom:0,
  },
  ratings: {
    marginLeft:60,
    marginBottom:10,
    paddingBottom:40,
  },
}));



export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const NewTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: props.Theme.body,
      color: props.Theme.text,
      boxShadow: theme.shadows[1],
      fontSize: 18,
    },
  }))(Tooltip);

  return (
    <Card className={classes.root} style={{color: props.Theme.body, backgroundColor: props.Theme.text}}>
        <CardMedia
        className={classes.cover}
        image={props.Moviedet.Poster}
        title={props.Moviedet.MovieName}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.Moviedet.MovieName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{color: props.Theme.body}}>
            Release: {props.Moviedet.Release_date}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent" align="left" marginLeft="50px">
                <Typography variant="h6" component="legend">
                  {props.Moviedet.Plot}
                </Typography>
          </Box>
        </CardContent>
        <div className={classes.controls}>
          <NewTooltip title="Add to watchlist" className={classes.tooltip}>
            <AddCircleOutlineIcon/>
          </NewTooltip>
        </div>
        <div className={classes.ratings}>
            <Box component="fieldset" mb={3} borderColor="transparent" align="left" style={{marginBottom:'30px'}}>
                <Typography variant="h6" component="legend">
                    Ratings : {props.Moviedet.Rating}
                </Typography>
            </Box>
        </div>
      </div>
    </Card>
  );
}
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carous.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function CarousRev(props){
    const classes = useStyles();

return(  
<Carousel style={{marginLeft: "0px", marginRight: "4.5%"}}>
  <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
  
    <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>xyz</Typography>
        <br/>
        <Avatar style={{textAlign:'left', marginLeft: 220}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Rating name="read-only" defaultValue={10} max={10} readOnly />
    </Box>
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
    <div style={{height: 50}}></div>
    
  </Carousel.Item>
  <Carousel.Item interval={60000}>
 
  <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>abc</Typography>
        <br/>
        <Avatar style={{textAlign:'left', marginLeft: 220}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Rating name="read-only" defaultValue={8} max={10} readOnly />
    </Box>
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
    <div style={{height: 50}}></div>

  </Carousel.Item>
  <Carousel.Item interval={60000}>

  <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>xyz</Typography>
        <br/>
        <Avatar style={{textAlign:'left', marginLeft: 220}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Rating name="read-only" defaultValue={2} max={10} readOnly />
    </Box>
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
    <div style={{height: 50}}></div>
  </Carousel.Item>
</Carousel>
);
}
export default CarousRev;
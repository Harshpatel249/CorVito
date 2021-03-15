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
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}> Easily the best movie i've ever seen. My wife kept talking to babysitter on phone. On the way back home, I had to explain her the entire movie. My anger was beyond hell's limit. I could feel the burning flame in my brain. I did what i had to do. If God never wanted me to cut-off the tongue and rape her, Then he wouldn't have given me the thought. Plot Twist: I'm suffering from excessive loneliness and hallucinations. There is no wife, no theatre and no babysitter. But then who did i kill? wait, Was there even a movie? </h6>
    <div style={{height: 50}}></div>
    
  </Carousel.Item>
  <Carousel.Item interval={60000}>
 
  <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>abc</Typography>
        <br/>
        <Avatar style={{textAlign:'left', marginLeft: 220}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Rating name="read-only" defaultValue={8} max={10} readOnly />
    </Box>
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}> Bruh! I literally shat my pants. Best Movie i've ever seen. Scorsese wilin' in '76 </h6>
    <div style={{height: 50}}></div>

  </Carousel.Item>
  <Carousel.Item interval={60000}>

  <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>xyz</Typography>
        <br/>
        <Avatar style={{textAlign:'left', marginLeft: 220}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Rating name="read-only" defaultValue={2} max={10} readOnly />
    </Box>
    <h6 align="left" style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}> E bhaai! Hindi ma dub kem nathi bhai picture? kashi khabar na padi khaali randio ane khun kharaba hata aakha picture ma saheb. </h6>
    <div style={{height: 50}}></div>
  </Carousel.Item>
</Carousel>
);
}
export default CarousRev;
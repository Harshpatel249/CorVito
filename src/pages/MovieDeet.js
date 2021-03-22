import Typography from '@material-ui/core/Typography';
import React from 'react';
import './MovieDeet.css';
import Carous from '../containers/Carous';
import CarousRev from '../containers/CarouRev';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useLocation} from "react-router-dom";
import { Top20 } from '../assets/TopMovie';

export default function MovieDeet(props){ 

 
    let location = useLocation();
        

    return (
        <div>
            <Typography variant="h2" align="center" style={{color:props.Theme.text}} gutterBottom>
                    {Top20.Movies[location.userProps.ind].MovieName}
            </Typography>
            <Typography variant="h4" align="center" style={{color:props.Theme.text}} gutterBottom>
                    Genre : {Top20.Movies[location.userProps.ind].Genre}
            </Typography>
            <div style={{backgroundColor:"#f1faee", width:"100%", margin:"0"}} hspace="100">
                <br/>
                <br/>
                <img className="imgN" src = {Top20.Movies[location.userProps.ind].Poster} align="left" hspace="30" height="500"/>
                <br/>
                <br/>
                <Typography variant="h5" gutterBottom align="left">
                    Plot:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Plot} </h6>
                <Typography variant="h5" gutterBottom align="left">
                    Director:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Director}</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Cast:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Cast}</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Initial Release:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Release_date}</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Language:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Language}</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Duration:
                </Typography>
                <h6 align="left" color="textSecondary">{Top20.Movies[location.userProps.ind].Duration}</h6>
                <br/>
                <br/>
                <Box component="fieldset" mb={3} borderColor="transparent" align="left" marginLeft="50px">
                    <Typography variant="h6" component="legend">Rate:</Typography>
                    <Rating name="customized-10" defaultValue={0} max={10} />
                    <Button variant="contained" backgroundColor={props.Theme.navbar} style={{marginBottom: "15px", marginLeft: "115px"}}>Add to WatchList</Button>
                </Box>
            </div>
                <div>
                    <br/>
                    <br/>
                    <h2 style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>Similar Movies:</h2>
                    <Carous Theme={props.Theme}/>
                </div>
                <div>
                    <br/>
                    <br/>
                    <h2 style={{color:props.Theme.text,textAlign:'left', marginLeft: 220}}>User Reviews:</h2>
                    <CarousRev Theme={props.Theme}/>
                </div>
        </div>
    );
}


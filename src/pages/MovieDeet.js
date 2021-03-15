import Typography from '@material-ui/core/Typography';
import React from 'react';
import './MovieDeet.css';
import Carous from '../containers/Carous';
import CarousRev from '../containers/CarouRev';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function MovieDeet(props){ 
    return (
        <div>
            <Typography variant="h2" align="center" style={{color:props.Theme.text}} gutterBottom>
                    Taxi Driver
            </Typography>
            <Typography variant="h4" align="center" style={{color:props.Theme.text}} gutterBottom>
                    Genre : Crime, Drama 
            </Typography>
            <div style={{backgroundColor:"#20b2aa", width:"100%", margin:"0"}} hspace="100">
                <br/>
                <br/>
                <img className="imgN" src = "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg" align="left" hspace="30" height="500"/>
                <br/>
                <br/>
                <Typography variant="h5" gutterBottom align="left">
                    Plot:
                </Typography>
                <h6 align="left" color="textSecondary">A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute. </h6>
                <Typography variant="h5" gutterBottom align="left">
                    Director:
                </Typography>
                <h6 align="left" color="textSecondary">Martin Scorsese</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Cast:
                </Typography>
                <h6 align="left" color="textSecondary">Robert DeNiro, Harvey Keitel, Jodie Foster</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Initial Release:
                </Typography>
                <h6 align="left" color="textSecondary">8 February 1976</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Language:
                </Typography>
                <h6 align="left" color="textSecondary">English</h6>
                <Typography variant="h5" gutterBottom align="left">
                    Duration:
                </Typography>
                <h6 align="left" color="textSecondary">114 min</h6>
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


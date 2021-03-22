import React from 'react';
import Typography from '@material-ui/core/Typography';
import ControlledPaginationGrid from '../containers/TableList.js';
import { Top20 } from '../assets/TopMovie';

export default function Movielist(props){
    return(
        <div>
             <div>
                <Typography variant="h4" gutterBottom align="left" style={{color:props.Theme.text, marginLeft:"8vw"}}>
                    <br/>
                     Movies:
                    <br/>
                    <br/>
                </Typography>
             </div>
             <ControlledPaginationGrid Theme={props.Theme} movies={Top20.Movies}/>  
        </div>
    );
}
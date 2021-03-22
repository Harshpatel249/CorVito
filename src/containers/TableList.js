import * as React from 'react';
import MediaControlCard from '../components/Cards2';
import Box from '@material-ui/core/Box';
import { NavLink, Link } from "react-router-dom";

export default function ControlledPaginationGrid(props) {
  
  return (
    <div>
    {
      props.movies.map((Movies,index) => {
        return(
          <NavLink to={{pathname:"/moviedetail/"+Movies.key, userProps:{ind: Movies.key}}} tag={Link} style={{textDecoration: 'none'}}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <MediaControlCard Theme={props.Theme} Moviedet={Movies}/>
            </Box>
            <div style={{height: 50}}></div>
            </NavLink>
          );
        })
      }
    </div>
  );
}
import React from 'react';
import Carous from '../containers/Carous';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { NavLink, Link } from "react-router-dom";
export default function Profile(props){
    document.body.style = 'background:'+ props.Theme.body;
    return (
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"1px 0px",
                backgroundColor:"#20B2AA",
                height:"300px",
                justifyContent:"center",
            }}>
                <div>
                    <img style = {{width:"160px", height:"160px", borderRadius:"80px", marginLeft:"100px",marginTop:"50px"}}
                    src = "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h1 style={{
                        color:"black",
                        marginTop:"100px",
                        marginLeft:"25px",
                        }}>Kishan Paaji</h1>
                        <div style={{padding:"0", marginLeft:"0"}}>
                        <IconButton><CreateIcon/></IconButton>
                        <IconButton><SettingsIcon/></IconButton>
                        <IconButton><EqualizerIcon/></IconButton>
                        </div>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Watch List</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Rated Movies</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Recommendations</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
        </div>
    );
}
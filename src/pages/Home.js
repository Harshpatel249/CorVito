import React from 'react';
import Carous from '../containers/Carous';

export default function Home(props){
    document.body.style = 'background:'+ props.Theme.body;
    return (
        <div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 269}}>Top rated Movies</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 269}}>Recommended rated Movies</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 269}}>Most popular</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        </div>
    );
}
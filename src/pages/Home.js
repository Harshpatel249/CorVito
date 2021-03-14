import React from 'react';
import Carous from '../containers/Carous';
import './Home.css';

export default function Home(props){
    document.body.style = 'background:'+ props.Theme.body;
    return (
        <div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Top rated Movies</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Recommended rated Movies</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        <div>
        <div style={{height:50}}>
        <h2 style={{color:props.Theme.text, textAlign:'left', marginLeft: 220}}>Most popular</h2>
        </div>
        <div>
        <Carous Theme={props.Theme}/>
        </div>
        </div>
        </div>
    );
}
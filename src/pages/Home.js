import React from 'react';

export default function Home(props){
    document.body.style = 'background:'+ props.Theme.body;
    return (
        <div>
        <h1 style={{ color: props.Theme.text }}>Welcome to the home page!</h1>
        <p style={{ color: props.Theme.text }}>Lorem ipsum dolor</p>
        </div>
    );
}
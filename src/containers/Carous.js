import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CardGrid from '../components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carous(props){

return(  
<Carousel>
  <Carousel.Item interval={60000}>
  
    <CardGrid
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
      Theme={props.Theme}
    />
    <div style={{height: 50}}></div>
    
  </Carousel.Item>
  <Carousel.Item interval={60000}>
 
    <CardGrid
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
      Theme={props.Theme}
    />
    <div style={{height: 50}}></div>
  </Carousel.Item>
  <Carousel.Item interval={60000}>

    <CardGrid
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
      Theme={props.Theme}
    />
    <div style={{height: 50}}></div>
  </Carousel.Item>
</Carousel>
);
}
export default Carous;
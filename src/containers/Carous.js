import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CardGrid from '../components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carous.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Carous(props){

const XL = useMediaQuery('(min-width:1700px)');
const L = useMediaQuery('(min-width:1500px)');
const M = useMediaQuery('(min-width:1000px)');
const S = useMediaQuery('(min-width:500px)');

if(XL){
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
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
}else if(L){
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
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
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
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
}else if(M){
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
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
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
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
}else if(S){
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
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
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
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
}else{
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
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
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
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

}
export default Carous;
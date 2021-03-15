import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CardGrid from '../components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carous.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Top20 } from '../assets/TopMovie';

function Carous(props){

const XL = useMediaQuery('(min-width:1700px)');
const L = useMediaQuery('(min-width:1500px)');
const M = useMediaQuery('(min-width:1000px)');
const S = useMediaQuery('(min-width:700px)');

if(XL){
  return(  
    <Carousel style={{marginLeft: "0px", marginRight: "4.5%", overflow: "hidden", whiteSpace: "nowrap"}}>
      <Carousel.Item interval={60000} style={{borderColor: props.Theme.text}}>
      
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(0,5)}
        />
        <div style={{height: 50}}></div>
        
      </Carousel.Item>
      <Carousel.Item interval={60000}>
     
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(5,10)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(10,15)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(15,20)}
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
          Moviedet={Top20.Movies.slice(0,4)}
        />
        <div style={{height: 50}}></div>
        
      </Carousel.Item>
      <Carousel.Item interval={60000}>
     
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(4,8)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(8,12)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(12,16)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(16,20)}
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
          Moviedet={Top20.Movies.slice(0,3)}
        />
        <div style={{height: 50}}></div>
        
      </Carousel.Item>
      <Carousel.Item interval={60000}>
     
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(3,6)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(6,9)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(9,12)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(12,15)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(15,18)}
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
          Moviedet={Top20.Movies.slice(0,2)}
        />
        <div style={{height: 50}}></div>
        
      </Carousel.Item>
      <Carousel.Item interval={60000}>
     
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(2,4)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(4,6)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(6,8)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(8,10)}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies.slice(10,12)}
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
          Moviedet={Top20.Movies[0]}
        />
        <div style={{height: 50}}></div>
        
      </Carousel.Item>
      <Carousel.Item interval={60000}>
     
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies[1]}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies[2]}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies[3]}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies[4]}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
    
        <CardGrid
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          Theme={props.Theme}
          Moviedet={Top20.Movies[5]}
        />
        <div style={{height: 50}}></div>
      </Carousel.Item>
    </Carousel>
    );
}

}
export default Carous;
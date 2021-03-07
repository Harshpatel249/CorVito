
import React from "react";
import './App.css';
import { Route, Switch, HashRouter } from "react-router-dom";
import LogIn from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Home from "../src/pages/Home";
import {lightTheme, darkTheme} from "./theme";
import NavBar from "../src/components/NavBar";



function App() {
const[theme,setTheme] = React.useState(darkTheme);
const x = true;

function changeTheme(){
  if(theme == lightTheme){
    setTheme(darkTheme);
  }else{
    setTheme(lightTheme);
  }
  
}
  return (
    x?<div className="App" style={{backgroundColor: theme.body}}>
    <NavBar Theme={theme} onChange = {changeTheme}/>
    <HashRouter basename="/">
        <Switch>
          <Route
            path="/home"
            render={() => <Home Theme={theme} />}
          />
          <Route
            path="/login"
            exact
            component={LogIn}
          />
          <Route
            path="/signup"
            exact
            component={SignUp}
          />
        </Switch>
      </HashRouter>
  </div>:
  <div className="App" style={{backgroundColor: theme.body}}>
  <HashRouter basename="/">
      <Switch>
        <Route
          path="/login"
          exact
          component={LogIn}
        />
        <Route
          path="/signup"
          exact
          component={SignUp}
        />
      </Switch>
    </HashRouter>
</div>
    
  );
}

export default App;

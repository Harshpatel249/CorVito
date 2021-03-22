
import React from "react";
import './App.css';
import { Route, Switch, HashRouter } from "react-router-dom";
import LogIn from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Home from "../src/pages/Home";
import {lightTheme, darkTheme} from "./theme";
import NavBar from "../src/components/NavBar";
import Profile from "../src/pages/Profile";
import MovieDeet from "../src/pages/MovieDeet";
import Movielist from "./pages/MovieList";
import Settings from "./pages/Settings";

function App() {
const [theme,setTheme] = React.useState(darkTheme);

//Use-State constants
const [isLogin,setisLogin] = React.useState(false);
const [isSignUp,setisSignUp] = React.useState(false);
const [isLoggedIn, setisLoggedin] = React.useState(false);


//Handling functions
function onLogIn(){
  setisLoggedin(true);
}

function onSignout(){
  setisLoggedin(false);
}

function routeHome(){
  setisLogin(false);
  setisSignUp(false);
  setTheme(darkTheme);
}

function routeLogin(){
  setisLogin(true);
  setTheme(lightTheme);
}

function routeSignUp(){
  setisSignUp(true);
  setTheme(lightTheme);
}

function changeTheme(){
  if(theme == lightTheme){
    setTheme(darkTheme);
  }else{
    setTheme(lightTheme);
  }
  
}
 
//Render Return
if(!(isLogin || isSignUp)){ //Route pages with nav-bar
     return(
    <div className="App" style={{backgroundColor: theme.body}}>
    <HashRouter basename="/">
    <NavBar Theme={theme} onChange = {changeTheme} onLogin = {routeLogin} onSignup = {routeSignUp} isLoggedin = {isLoggedIn} onSignOut = {onSignout}/>
        <Switch>
          <Route
            path="/home"
            exact
            render={() => <Home Theme={theme} onHome = {routeHome}/>}
          />
           <Route
            path="/profile"
            exact
            render={() => <Profile Theme={theme}/>}
          />
          <Route
            path="/moviedetail/"
            render={() => <MovieDeet Theme={theme}/>}
          />
          <Route
            path="/list"
            render={() => <Movielist Theme={theme}/>}
          />
          <Route
            path="/settings"
            render={() => <Settings Theme={theme}/>}
          />
        </Switch>
      </HashRouter>
  </div>
     );
   }else{
    return( //Route pages without nav-bar
  <div className="App" style={{backgroundColor: lightTheme.body}}>
  <HashRouter basename="/">
      <Switch>
        <Route
          path="/login"
          exact
          render={() => <LogIn onSignUp = {routeSignUp} onHome = {routeHome} onLoggedin = {onLogIn}/>}
        />
        <Route
          path="/signup"
          exact
          render={() => <SignUp onLogin = {routeLogin} onHome = {routeHome}/>}
        />
      </Switch>
    </HashRouter>
</div>
    );
}    
} 


export default App;

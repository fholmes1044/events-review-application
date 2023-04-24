import React from "react";
import './App.css';
import SignUpForm from "./SignUpForm";
import UserHomePage from "./UserHomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import { UserProvider } from "./context/user";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          
      <UserProvider>
        Learn React
      <NavBar/>
       <Switch>
        <Route exact path ="/">
          <UserHomePage />
        </Route>
        <Route exact path ="/signup">
          <SignUpForm/>
        </Route>
        <Route exact path ="/login">
          <Login/>
        </Route>
      </Switch> 
      <SignUpForm/>
      </UserProvider>
    </div>
  );
}

export default App;

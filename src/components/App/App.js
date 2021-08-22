
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useReducer} from 'react';
import './App.css';
import { initialState, Reduce } from '../../bin/reducerState/reducerState';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LandingPage from '../pages/LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import BookingPage from '../pages/BookingPage/BookingPage';
import SignInPage from '../pages/SignInPage/SignInPage';

export let pageWrapper = React.createContext()

function App() {

  let [state,dispatch]= useReducer(Reduce,initialState)
  console.log(state)
  return (
    <pageWrapper.Provider value={{state,dispatch}}>
      <Router>
        <div className="App">
        <Nav/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/SignIn" component={SignInPage}/>
            <Route path="/SignUp" component={SignUpPage}/>
            <Route path="/Booking" component={BookingPage}/>

          </Switch>
        </div>
      </Router>
    </pageWrapper.Provider>
  );
}

export default App;

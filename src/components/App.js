import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

//app components
import Header from './Header';
import Classes from './Classes';
import Account from './Account';
import Schedule from './Schedule';
import Contact from './Contact';
import Home from './Home';
import Tutorial from './Tutorial.js';


class App extends Component{
    render () {
        return (
            <BrowserRouter>
                <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" render={ () => <Home /> } />
                    <Route path="/classes" render={ () => <Classes /> } />
                    <Route path="/schedule" render={ () => <Schedule /> } />
                    <Route path="/account" render={ () => <Account /> } />
                    <Route path="/Contact" render={ () => <Contact /> } />
                    <Route path="/tutorial" render={ () => <Tutorial /> } />

                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

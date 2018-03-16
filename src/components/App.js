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
import Schedule from './Schedule';
import Contact from './Contact';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route path="/home" render={ () => <Home /> } />
                <Route path="/classes" render={ () => <Classes /> } />
                <Route path="/schedule" render={ () => <Schedule /> } />
                <Route path="/Contact" render={ () => <Contact /> } />

            </Switch>
        </div>
    </BrowserRouter>
);

export default App;

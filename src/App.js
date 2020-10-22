import React, {Component }from 'react';
import {Beranda,Tentang,HubungiKami,Navigation,Footer} from "./templates"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
class App  extends Component {
    render() { 
        return (  
            <>
            <Router>
              <Navigation />
              <Switch>
                <Route path="/" exact component={() => <Beranda />} />
                <Route path="/tentang" exact component={() => <Tentang />} />
                <Route path="/hubungi-kami" exact component={() => <HubungiKami />} />
              </Switch>
              <Footer />
            </Router>
            </>
        );
    }
}   
export default App;
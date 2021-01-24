import React, {Component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Router>
            <Switch>
                <Route exact path='/react'><h3>ahoi ahoi</h3></Route>
                <Route exact path='/react/join'><RoomJoinPage/></Route>
                <Route exact path='/react/create'><RoomCreatePage/></Route>
            </Switch>
        </Router>);        
    }
}
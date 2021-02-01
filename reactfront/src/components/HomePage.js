import React, {Component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Room from "./Room";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Router>
            <Switch>
                <Route exact path='/react'><h3>ahoi ahoi</h3></Route>
                <Route exact path='/react/join' component={RoomJoinPage}/>
                <Route exact path='/react/create' component={RoomCreatePage}/>
                <Route exact path='/react/room/:roomCode' component={Room}/>
            </Switch>
        </Router>);        
    }
}
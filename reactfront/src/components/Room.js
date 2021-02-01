import React, {Component} from 'react';

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 999,
            guestCanPause: false,
            isHost: false
        };

        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();
    }

    getRoomDetails(){
        fetch('/api/rooms/get?code=' + this.roomCode).then(
            response => response.json()
        ).then(data => {
            this.setState({
                votesToSkip : data.votes_to_skip,
                guestCanPause : data.guest_can_pause,
                isHost : data.is_host
            });
        })
    }

    render(){
        return(
        <div>
            <h1>dis room be {this.roomCode}</h1>
            <p>Votes to skip: {this.state.votesToSkip}</p>
            <p>Guest can pause: {this.state.guestCanPause + ""}</p>
            <p>IsHost: {this.state.isHost + ""}</p>
        </div>
        )
    }
}
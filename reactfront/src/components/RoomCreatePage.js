import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default class RoomCreatePage extends Component{
    default_votes = 2

    constructor(props){
        super(props);

        this.state = {
            guestCanPause: false,
            votesToSkip: this.default_votes,
        };

        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
        this.handleRoomCreatePressed = this.handleRoomCreatePressed.bind(this);
    }

    handleVotesChange(e){
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    handleGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false,
        });
    }

    handleRoomCreatePressed(e){
        //console.log(this.state)
        const csrftoken = this.getCookie('csrftoken');

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json',
                'X-CSRFToken': csrftoken},
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause
            })
        };

        fetch('/api/rooms/create', requestOptions).then( 
            (response) => response.json()
        ).then( 
            (data) => this.props.history.push('/react/room/' + data.code)
        );
    }
    
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    render(){ return( 
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">WANNA GET FRISKY MAKE IT RISKY</Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">Guest controllers</div>
                    </FormHelperText>
                    <RadioGroup row onChange={this.handleGuestCanPauseChange} defaultValue="false">
                        <FormControlLabel value="true" control={<Radio color="primary"/>} label="Play/Pause" labelPlacement="bottom"/>
                        <FormControlLabel value="false" control={<Radio color="secondary"/>} label="Disabled" labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>   
                    <TextField required={true} type="number" onChange={this.handleVotesChange} defaultValue={this.default_votes} inputProps={{ min:1, style:{textAlign:"center"} }} />
                    <FormHelperText>
                        <div align="center">Votes to skip</div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" onClick={this.handleRoomCreatePressed} variant="contained">Create Room</Button> 
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/react" component={Link}>Go Back</Button>
            </Grid>
        </Grid>
    );}
}
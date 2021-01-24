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
                    <RadioGroup row defaultValue="true">
                        <FormControlLabel value="true" control={<Radio color="primary"/>} label="Play/Pause" labelPlacement="bottom"/>
                        <FormControlLabel value="false" control={<Radio color="secondary"/>} label="Disabled" labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>   
                    <TextField required={true} type="number" defaultValue={this.default_votes} inputProps={{ min:1, style:{textAlign:"center"} }} />
                    <FormHelperText>
                        <div align="center">Votes to skip</div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained">Create Room</Button> 
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/react" component={Link}>Go Back</Button>
            </Grid>
        </Grid>
    );}
}
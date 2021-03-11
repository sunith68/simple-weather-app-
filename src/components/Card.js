import React, { Component } from 'react'
import Weather from './Weather'
import Temperature from './Temperature'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    spaces:{
        margin: theme.spacing(4)
    }
});

class Card extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Paper className={classes.paper}>
                    <Weather weather={this.props.weather.weather}/>
                    <Temperature temperature={this.props.weather.temperature}/>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(Card)
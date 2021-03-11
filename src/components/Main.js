import React, { Component } from 'react'
import Card from './Card'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class Main extends Component {
    render() {
        // console.log(this.props.data);  
        const {classes}=this.props  
        return (
            <Grid className={classes.root} container spacing={1} justify="center" alignItems="center">
                {this.props.data.map((weather,index) => <Card key={index} weather={weather}/>)}
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Main)
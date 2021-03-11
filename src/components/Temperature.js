import React, { Component } from 'react'
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

export default class Temperature extends Component {
    render() {
        return (
            <div>
            Temperature : <span>{this.props.temperature}</span>
            </div>
        )
    }
}

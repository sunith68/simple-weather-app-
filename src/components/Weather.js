import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div>
                Weather : <span>{this.props.weather}</span>
            </div>
        )
    }
}

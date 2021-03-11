import React, { Component } from 'react'
import data from '../../data'
import Main from "../Main";

class Home extends Component {
    state={
        data:data
    };
    render() {
        return (
            <div>
                <Main data={this.state.data}/>
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react';

class Datajogo extends Component {
    render() {
        return (
            <p>Data jogo: {this.props.Timer.toLocaleString()}</p>
        )
    }
}
export default Datajogo;
import React, { Component } from 'react';

class Botagolo extends Component {

    hasClick(ev) {
        this.props.marcaGolo()
        ev.preventDefault()
    }

    render() {
        console.log(this.props)
        return (
            <button onClick={this.hasClick.bind(this)}>Golo!</button>
        )
    }
}
export default Botagolo;
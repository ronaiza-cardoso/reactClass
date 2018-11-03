import React, { Component } from 'react';
import { Botagolo } from './index'

class Equipa extends Component {
    constructor() {
        super()
        this.state = {
            'marcador': 0
        }
    }

    botaGolo() {
        this.setState({
            marcador: this.state.marcador + 1
        })
    }

    render() {
        return (
            <div className="Equipa">
                <h1>{this.props.Dados.nome}</h1>
                <h2>{this.state.marcador}</h2>
                <Botagolo marcaGolo={this.state.botaGolo}></Botagolo>
            </div>
        )
    }
}
export default Equipa;

// Timer
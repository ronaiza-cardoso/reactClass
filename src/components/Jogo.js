import React, { Component } from 'react';
import { Meteorologia, Datajogo, Equipa, Campo } from './index'

const flex = {
    display: 'flex'
}

class Jogo extends Component {

    constructor() {
        super()
        this.state = {
            'resEqCasa': 0,
            'resEqVisitante': 0,
        }
    }

    incCasa() {
        this.setState({ resEqCasa: this.state.resEqCasa + 1 });
    }

    incVisitante() {
        this.setState({ resEqCasa: this.state.resEqVisitante + 1 });
    }

    render() {
        return (
            <div>
                <Meteorologia></Meteorologia>
                <Campo Nome={this.props.Estadio}></Campo>
                <Datajogo Timer={this.props.DataJogo}></Datajogo>
                <div style={flex}>
                    <Equipa Dados={this.props.EquipaCasa}       BotaGolo={this.incCasa.bind(this)}       Marcador={this.state.resEqVisitante}></Equipa>
                    <Equipa Dados={this.props.EquipaVisitante}  BotaGolo={this.incVisitante.bind(this)}  Marcador={this.state.resEqVisitante}></Equipa>
                </div>
            </div>
        )
    }
}
export default Jogo;
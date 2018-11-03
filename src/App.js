import React, { Component } from 'react';
import './App.css';
import { Jogo } from './components'

const initJogo = {
  'estadio': 'José de alvalade',
  'equipaCasa': {
    'nome': 'Esquipa Casa',
    'resultado': 0
  },
  'equipaVisitante': {
    'nome': 'Esquipa Visitante',
    'resultado': 0
  },
  'data': new Date()
}

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <Jogo
          Estadio={initJogo.estadio}
          EquipaCasa={initJogo.equipaCasa}
          EquipaVisitante={initJogo.equipaVisitante}
          DataJogo={initJogo.data}
        >
        </Jogo>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export const titleStyle = {
    color: '#f56'
  };

class Campo extends Component {
    render() {
        return (
            <h1 className="main-title">Estádio <strong style={titleStyle}>{this.props.Nome}</strong></h1>
        )
    }
}
export default Campo;
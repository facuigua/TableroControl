import React from 'react';
import Contenedor from '../../Vista/Contenedor';
import {
    Col
  } from 'reactstrap';

class Seguridad extends React.Component {

  render() {
    return (
    <>
        <Contenedor titulo={this.props.titulo} />
        <Col xs="12">Algo</Col>
        
    </>
    );
  }
}

export default Seguridad;

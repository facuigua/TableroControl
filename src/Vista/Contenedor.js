import React from 'react';
import PieCirculito from '../Vista/PieCirculito';
import NavJP from '../Vista/NavJP';

class Contenedor extends React.Component {
  render() {
    return (
      <>
        <NavJP titulo={this.props.titulo} />
        <PieCirculito titulo={this.props.titulo} />
      </>
    );
  }
}

export default Contenedor;

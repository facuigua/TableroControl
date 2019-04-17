import React from 'react';
import './MasInfo.css';
import {
  Container, Row
} from 'reactstrap';

class MasInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      controlAbierto: false,
    }
  }
  abrirMasInfo(){
    this.setState({controlAbierto: !this.state.controlAbierto});
  }

  render() {

    var { controlAbierto } = this.state;
    var classControl = controlAbierto ? "abierto" : "cerrado";
    return (
      <>
        <div onClick={this.abrirMasInfo.bind(this)} className={`boton-masinfo-jp ${classControl}`}>
          <i className="far fa-arrow-alt-circle-down"></i>
        </div>
        <div className={`contenedor-masinfo-jp ${classControl}`}>
          <div className="cerrar-masinfo-jp" onClick={this.abrirMasInfo.bind(this)}><i className="far fa-times-circle"></i></div>
          <Container>
            <div className="contenido-masinfo-jp">
              {this.props.html}
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MasInfo;

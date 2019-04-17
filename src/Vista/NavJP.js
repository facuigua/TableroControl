import React from 'react';
import {
  Col
} from 'reactstrap';
import './NavJP.css';

class NavJP extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
 
  componentDidMount(){
    document.body.classList.remove('pagina-principal');
  }

  goBack(){
    if(window.location.pathname.split('/').length === 2){
      document.body.classList.add('pagina-principal');
    }
    window.history.back();
  }
  render() {
    return (
      <Col xs="12" className="navjp">
          <div className="boton-atras-jp float-left" onClick={this.goBack}><i className="far fa-arrow-alt-circle-left"></i></div>
          <h2 className="float-right" data-titulo={this.props.titulo}>{this.props.titulo}</h2>
      </Col>
    );
  }
}

export default NavJP;

import React from 'react';
import '../../Vista/VistaCuadros.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import axios from 'axios';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';




class Analytics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        datos: [],
        datos_netmuni: []
    }
  }
    componentDidMount(){
      this.TomarDatos();
      console.log(this.props);

    }
    TomarDatos(){
      const formData = new FormData();
      formData.append('opcion','traer_datos_netmuni');
      axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData)
      .then((function(data){
        console.log(data.data.Titulo[0]);
        console.log(data.data.Datos);

        this.setState({
          datos: data.data.Titulo[0],
          datos_netmuni: data.data.Datos
        });
      }).bind(this));

    }
  render() {
    console.log(this.state)
    return (
    <>
        <Contenedor titulo={this.props.titulo} />
        <Col xs="12" className="item-estadistica-jp">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5">
                <h2 className="float-left">
                  <i className="fa fa-users"></i>
                </h2>
                <h2 className="float-left cantidad-usuario">
                  {this.state.datos.cantidad}
                </h2>
                <h4 className="float-left tipo-usuario">{this.state.datos.titulo}</h4>
              </Col>         
            </Row>
            <Row className="fila">
              <Col xs="4" className="item-dato-final1">
                <h2 className="centrado">RANKING DE SISTEMAS</h2>
                <Col>
                  {
                   this.state.datos && this.state.datos_netmuni.map(function(data){
                      return(
                        <Row >

                            <h3 className="link texto-pagina">{data.titulo}</h3>
                            <h2 className="text-info ml-auto">{data.cantidad}</h2>
                        </Row>
                      )
                   }) 
                  } 
                </Col>
              </Col>
              <Col xs="3" className="item-dato-final1">
                <h2 className="centrado">ORIGEN</h2>
                <Col>
                  { 
                   this.state.datos_canales && this.state.datos_canales.map(function(data){
                      return(
                        <Row>
                          <h2 className="link texto-pagina">{data.canal}</h2>
                          <h1 className="text-info ml-auto">{data.cantidad_visitas}</h1>
                        </Row>
                      )
                   }) 
                  } 
                </Col>
              </Col>
            </Row>
          </Col>      
    </>
    );
  }
}

export default Analytics;


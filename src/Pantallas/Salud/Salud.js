import React from 'react';
import '../../Vista/VistaColumnas.css';
import Contenedor from '../../Vista/Contenedor';
import {
    Col, Row
  } from 'reactstrap';

class Salud extends React.Component {

  render() {
    return (
    <>
        <Contenedor titulo={this.props.titulo} />
        <Col xs="12" className="contenedor-total">
        <Row>
          <Col xs="6">
            <Row className="contenedor-filas">
              <Col xs="3">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col  className="texto-monto">
                <h2 className="float-left">
                  <i className="fas fa-user-friends"></i>
                </h2>
                <h1 className="float-left monto-recaudacion text-info">
                  24.454
                </h1>
                <h3 className=" tipo-recaudacion">personas atendidas en hospitales</h3>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col className="texto-monto">
                <h2 className="float-left">
                  <i className="fas fa-user-friends"></i>
                </h2>
                <h1 className="float-left monto-recaudacion text-info">
                  3.456
                </h1>
                <h3 className=" tipo-recaudacion">personas atendidas en salud mental</h3>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col  className="texto-monto">
                <h2 className="float-left">
                  <i className="fas fa-pills"></i>
                </h2>
                <h1 className="float-left monto-recaudacion text-info">
                  890.454
                </h1>
                <h3 className=" tipo-recaudacion">medicamentos entregados</h3>
              </Col>
              </Row>
              <Row >
                <Col xs="3" >
                  <div className="item-circulo float-right"></div>
                </Col>
                <Col className="texto-monto">
                  <h2 className="float-left">
                    <i className="fas fa-hand-holding-usd"></i>
                  </h2>
                  <h1 className="float-left monto-recaudacion text-info">
                    $190.454
                  </h1>
                  <h3 className=" tipo-recaudacion">recupero de costos hospitalarios</h3>
                </Col>
              </Row>
            </Col>
            <Col xs="6" >
              <Row className="contenedor-columnas">
                <Col xs="3" className="columna">
                  <h2>
                    <i className="far fa-hospital"></i>
                  </h2>
                  <h3>San Clemente</h3>
                  <h1 className="porcentajes text-info">60%</h1>
                  <h1 className="porcentajes text-info">60%</h1>
                  <h1 className="porcentajes text-info">60%</h1>
                  <h1 className="porcentajes text-info">60%</h1>
                </Col>
                <Col xs="3" className="columna">
                  <h2>
                    <i className="far fa-hospital"></i>
                  </h2>
                  <h3>Santa Teresita</h3>
                  <h1 className="porcentajes text-info">15%</h1>
                  <h1 className="porcentajes text-info">15%</h1>
                  <h1 className="porcentajes text-info">15%</h1>
                  <h1 className="porcentajes text-info">15%</h1>
                </Col>
                <Col xs="3" className="columna">
                  <h2 >
                    <i className="far fa-hospital"></i>
                  </h2>
                  <h3>Mar de Ajo</h3>
                  <h1 className="porcentajes text-info">25%</h1>
                  <h1 className="porcentajes text-info">25%</h1>
                  <h1 className="porcentajes text-info">25%</h1>
                  <h1 className="porcentajes text-info">25%</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        
    </>
    );
  }
}

export default Salud;

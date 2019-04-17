import React from 'react';
import '../Pantallas.css';
import Contenedor from '../../Vista/Contenedor';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
  } from 'reactstrap';

class Economia extends React.Component {

  render() {
    return (
    <>
        <Contenedor titulo={this.props.titulo} />
        <div className="offset-sm-2 col-5">
              <Nav>
                <NavItem>
                  <NavLink>
                    <h2>Recaudacion</h2>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><h2>2019</h2></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#"><h2>2018</h2></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#"><h2>2018</h2></NavLink>
                </NavItem>
              </Nav>
          </div>
          <div className="col-5">
            <h2 className="float-right">Tasas Emitidas</h2>
          </div>
          <Col xs="12" className="item-estadistica-jp">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5">
                <h2 className="float-left">
                  <i className="fa fa-home"></i>
                </h2>
                <h2 className="float-left monto-recaudacion">
                  $2.000.000
                </h2>
                <h4 className="float-right tipo-recaudacion">INMUEBLE</h4>
              </Col>
              <Col xs="5" className="item-dato-final">
                <div className="item-porcentaje float-left">
                  <h2 className="porcentaje-texto">85%</h2>
                </div>
                <h2 className="float-right">$20000000000</h2>
              </Col>
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5">
                <h2 className="float-left">
                  <i className="fa fa-home"></i>
                </h2>
                <h2 className="float-left monto-recaudacion">
                  $2.000.000
                </h2>
                <h4 className="float-right tipo-recaudacion">INMUEBLE</h4>
              </Col>
              <Col xs="5" className="item-dato-final">
                <div className="item-porcentaje float-left">
                  <h2 className="porcentaje-texto">85%</h2>
                </div>
                <h2 className="float-right">$20000000000</h2>
              </Col>
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5">
                <h2 className="float-left">
                  <i className="fa fa-home"></i>
                </h2>
                <h2 className="float-left monto-recaudacion">
                  $2.000.000
                </h2>
                <h4 className="float-right tipo-recaudacion">INMUEBLE</h4>
              </Col>
              <Col xs="5" className="item-dato-final">
                <div className="item-porcentaje float-left">
                  <h2 className="porcentaje-texto">85%</h2>
                </div>
                <h2 className="float-right">$20000000000</h2>
              </Col>
            </Row>
          </Col>                    
        
    </>
    );
  }
}

export default Economia;

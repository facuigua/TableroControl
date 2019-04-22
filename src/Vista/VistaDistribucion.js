import React from 'react';
import './VistaDistribucion.css';
import {
    Nav, NavItem, NavLink, Card, Table, Col, Row, Progress
  } from 'reactstrap';

class VistaDistrubucion extends React.Component {
  render() {
    return (
      <>
        <Col xs="10" className="item-estadistica-jp offset-sm-2">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="8">
                <div className="contenedor-datosgenerales">
                    <h2 className="float-left">
                    <i className="fa fa-users icono-general"></i>
                    </h2>
                    
                    <h1 className="float-left valor-general">
                    6160
                    </h1>
                    <h3 className="float-left texto-general">
                    familias beneficiadas  
                    por los programas
                    </h3>
                </div>
              </Col>
            </Row>
        </Col>
        <Col xs="12">
            <Row>
                <Col xs="10" className="offset-sm-3" >
                    <div className="grafico"><Progress color="info" value={90} /><p className="texto-detalle">Calor hogar</p></div>
                    <div className="grafico"><Progress color="info" value={80} /><p className="texto-detalle" >Ayudas economicas</p></div>
                    <div className="grafico"><Progress color="info" value={70} /><p className="texto-detalle">Medicacion</p></div>
                    <div className="grafico"><Progress color="info" value={50} /><p className="texto-detalle">Combi municipal</p></div>
                    <div className="grafico"><Progress color="info" value={30} /><p className="texto-detalle">Alimentos</p></div>
                    <div className="grafico"><Progress color="info" value={20} /><p className="texto-detalle">Leches especiales</p></div>
                    <div className="grafico"><Progress color="info" value={10} /><p className="texto-detalle">Eximicion de impuestos</p></div>
                    <div className="grafico"><Progress color="info" value={5} /><p className="texto-detalle">Lentes</p></div>
                </Col>
            </Row>
        </Col>
        <Col xs="12">
            <Row className="offset-sm-4"> 
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Norte</h2>
                    <h1> 60%</h1>
                </div>
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Centro</h2>
                    <h1> 60%</h1>
                </div>
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Sur</h2>
                    <h1> 60%</h1>
                </div>
            </Row>
        </Col>
      </>
    );
  }
}

export default VistaDistrubucion;
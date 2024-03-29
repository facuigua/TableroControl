import React from 'react';
import './VistaDistribucionPorcentaje.css';
import {
    Nav, NavItem, NavLink, Card, Table, Col, Row, Progress
  } from 'reactstrap';

class VistaDistribucionPorcentaje extends React.Component {
  render() {
    console.log('datosVista',this.props.datosVista);

    const items=this.props.datosVista.map((item,index)=>
    {
      var cantidad=(parseInt(item.cantidad)*100)/parseInt(item.total_2019);

      console.log('cantidad',cantidad);
      return(
          <>
          <Col xs="12" className="item-estadistica-jp">
            <Row>
              <Col xs="2">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5">
                <h2 className="float-left">
                  <i className={`fa ${item.icono}`}></i>
                </h2>
                <h2 className="float-left tipo-distribucion">
                  {item.titulo}
                </h2>
                <h4 className="float-right monto-distribucion">{item.cantidad}</h4>
              </Col>
              <Col xs="5" className="item-dato-final">
                <div className="item-porcentaje float-left">
                  <h2 className="porcentaje-texto-distribucion">{cantidad.toFixed(2)}%</h2>
                </div>
                  <h2 className="subtitulo-capacitaciones">{item.subtitulo}</h2>
              </Col>
            </Row>
          </Col>
          </>
      );
    });


    return (
      <>
        <Col xs="12" className="item-estadistica-jp-capacitacion">
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
                    {this.props.datosVista[0]['total_2019']}
                    </h1>
                    <h1 className="float-left texto-general">
                    cantidad de tramites realizados en 2019
                    </h1>
                </div>
              </Col>
            </Row>
        </Col>      
          {items}  
      </>
    );
  }
}

export default VistaDistribucionPorcentaje;
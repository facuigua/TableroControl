import React from 'react';
import './VistaDistribucion.css';
import {
    Nav, NavItem, NavLink, Card, Table, Col, Row, Progress
  } from 'reactstrap';

class VistaDistribucion extends React.Component {
  render() {
    console.log('datosVista',this.props.datosVista);

    const items=this.props.datosVista.map((item,index)=>
    {
      var cantidad=(parseInt(item.cantidad)*100)/parseInt(item.total_2019);
      
      console.log('cantidad',cantidad);
      return(
          <>
          <Col xs="7"><h6 class="porcentajeh6">{item.cantidad} ({cantidad.toFixed(2)}%)</h6></Col>
          
          <div className="grafico" key={index}>
          
          <Progress color="info" value={cantidad}/>
          <p className="texto-detalle">{item.titulo}</p>
          </div>
          </>
      );
    });


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
                    {this.props.datosVista[0]['total_2019']}
                    </h1>
                    <h3 className="float-left texto-general">
                    {this.props.datosVista[0]['detalle_total']}
                    </h3>
                </div>
              </Col>
            </Row>
        </Col>
        <Col xs="12" className="contenedor-footer-distribucion">
            <Row>
                <Col xs="10" className="offset-sm-3" >
                {items}
                </Col>
            </Row>
        </Col>
        <Col xs="12" className="" hidden>
            <Row className="offset-sm-4"> 
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Norte</h2>
                    <h1> 27%</h1>
                </div>
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Centro</h2>
                    <h1> 38%</h1>
                </div>
                <div className="contenedor-estadistica-zona">
                    <h2> Zona Sur</h2>
                    <h1> 35%</h1>
                </div>
            </Row>
        </Col>
      </>
    );
  }
}

export default VistaDistribucion;
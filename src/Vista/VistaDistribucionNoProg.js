import React from 'react';
import './VistaDistribucionNoProg.css';
import {
    Nav, NavItem, NavLink, Card, Table, Col, Row, Progress
  } from 'reactstrap';

class VistaDistribucionNoProg extends React.Component {
  render() {
    console.log('datosVista',this.props.datosVista);

    const items=this.props.datosVista.map((item,index)=>
    {
      var cantidad=(parseInt(item.cantidad)*100)/parseInt(item.total);
      var flecha = '';
      if (item.cantidad_2018 < item.cantidad_2019){
        flecha = 'fa-arrow-up unificados';
      } else if (item.cantidad_2018 == item.cantidad_2019){
          flecha = 'fa-equals';
        }
      else {
        flecha = 'fa-arrow-down unificados';
      }
      console.log('cantidad',cantidad);
      return(
          <>
          <Col xs="12" className="item-estadistica-jp-unificados">
            <Row>
              <Col xs="1">
                <div className="item-circulo float-right"></div>
              </Col>
              <Col xs="5" className="titulo-unificados">
                <h2 className="float-left">
                  <i className={`fa ${item.icono}`}></i>
                </h2>
                <h2 className="float-left tipo-distribucion-unificados">
                  {item.titulo}
                </h2>
                
              </Col>
              <Col xs="1" >
                <div className="item-porcentaje-unificados float-left">
                  <h4 className="monto-distribucion-unificados">{item.cantidad_2018}</h4>
                </div>
                
              </Col>
              <Col xs="1" className="offset-1">
              
               
                <div className="item-porcentaje-unificados float-left">
                  <h1 className="icono"><i className={`fas ${flecha}`}></i></h1>
                </div>
              </Col>
              <Col xs="1" className="offset-1">
                <div className="item-porcentaje-unificados float-left">
                <h4 className="monto-distribucion-unificados">{item.cantidad_2019}</h4>
                </div>
                
              </Col>
            </Row>
          </Col>
          
          </>
      );
    });


    return (
      <>
         
        <div className="offset-sm-6 col-6 " >
          <Row >
            <Col xs="2">
              <h1 className="anio" >2018</h1>    
            </Col>
            <Col xs="1">

            </Col>
            <Col xs="3" className="offset-sm-5">
             <h1 className="anio" >2019</h1>    
            </Col>
            
          </Row>
        </div>
          {items}  
      </>
    );
  }
}

export default VistaDistribucionNoProg;
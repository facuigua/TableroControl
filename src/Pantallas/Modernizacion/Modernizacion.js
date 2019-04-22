import React from 'react';
import '../VistaSubejes.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';

class DesarrolloSocial extends React.Component {

  render() {
    return (
      <>
        <Contenedor titulo={this.props.titulo} />
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">INFORMATICA</h1>
                <h3 className="float-left subtitulo-subeje">web analytics</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">856.454</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de visitas a la web</h4>
              </Col>                              
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">INFORMATICA</h1>
                <h3 className="float-left subtitulo-subeje">herramientas generadas</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">456</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de usuarios</h4>
              </Col>                              
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">PRENSA</h1>
                <h3 className="float-left subtitulo-subeje">noticias</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">754</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de noticias generadas</h4>
              </Col>                              
            </Row>
          </Col> 
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">RECLAMOS</h1>
                <h3 className="float-left subtitulo-subeje">informes</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">12.454</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de reclamos recibidos</h4>
              </Col>                              
            </Row>
          </Col>                              
        <MasInfo 
          html={
            <>
            <Card>
            <div> <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table></div>
            </Card>
            </>
          } 
        />

      </>
    );
  }
}

export default DesarrolloSocial;

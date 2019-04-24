import React from 'react';
import '../../Vista/VistaCuadros.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';

class Analytics extends React.Component {
  render() {
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
                  224.454
                </h2>
                <h4 className="float-left tipo-usuario">USUARIOS ACTIVOS</h4>
              </Col>         
            </Row>
            <Row className="fila">
              <Col xs="4" className="item-dato-final1">
                <h2 className="centrado">RANKING DE PÁGINAS</h2>
                <Col className="informacion-cuadro">
                  <Row>
                    <h2 className="text-info">9.734</h2><h3 className="link">/web/solicitud_beca</h3>
                  </Row>
                  <Row> 
                    <h2 className="text-info">2.288</h2><h3 className="link">/gestion/educacion/.../tu-primer-beca</h3>
                  </Row>
                  <Row>
                    <h2 className="text-info">1.152</h2><h3 className="link">/agenda</h3>
                  </Row>
                  <Row>
                    <h2 className="text-info">616</h2><h3 className="link">/contactos</h3>
                  </Row>
                  <Row>
                    <h2 className="text-info">529</h2><h3 className="link">/gestion/educacion/becas-nivel-superior</h3>
                  </Row>
                </Col>
              </Col>
              <Col xs="3" className="item-dato-final1">
                <h2 className="centrado">ORIGEN</h2>
                <Col className="informacion-cuadro">
                  <Row>
                    <h1 className="text-info">9.734</h1><h2 className="link">Redes</h2>
                  </Row>
                  <Row>
                    <h1 className="text-info">2.288</h1><h2 className="link">Orgánico</h2>
                  </Row>
                  <Row>
                    <h1 className="text-info">1.152</h1><h2 className="link">Directo</h2>
                  </Row>
                  <Row>
                    <h1 className="text-info">616</h1><h2 className="link">Referido</h2>
                  </Row>
                </Col>
              </Col>
              <Col xs="3" className="item-dato-final1">
                <h2 className="centrado">DISPOSITIVOS USADOS</h2>
                <Col className="informacion-cuadro">
                  <Row>
                    <h1 className="float-left">
                      <i className="fa fa-laptop"></i>
                    </h1>
                      <h2 className=" text-info link">1.152</h2>
                  </Row>
                  <Row>
                    <h1 className="float-left">
                      <i className="fa fa-tablet-alt"></i>
                    </h1>
                    <h2 className="text-info link">1.152</h2>             
                  </Row>
                  <Row>
                    <h1 className="float-left">
                      <i className="fa fa-mobile-alt"></i>
                    </h1>
                      <h2 className="text-info link">1.152</h2>                
                  </Row>
                </Col>
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

export default Analytics;

import React from 'react';
import '../VistaSubejes.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import axios from 'axios';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';

class DesarrolloSocial extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        datos: {}
    }
  }

  componentDidMount(){
    this.TomarDatos();
  }

  TomarDatos(){
    const formData = new FormData();
    formData.append('estadistica','1');
    axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_react.php', formData)
    .then((function(data){
        console.log(data);
       
    }).bind(this));
  }


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
                <h1 className="float-left titulo-subeje">ACCION SOCIAL</h1>
                <h3 className="float-left subtitulo-subeje">subtitulo accion social</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">856.454</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de ayudas otorgadas</h4>
              </Col>                              
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">DEPORTES</h1>
                <h3 className="float-left subtitulo-subeje">subtitulo deportes</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">456</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de alumnos</h4>
              </Col>                              
            </Row>
          </Col>
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">CULTURA</h1>
                <h3 className="float-left subtitulo-subeje">subtitulo cultura</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">754</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de alumnos</h4>
              </Col>                              
            </Row>
          </Col> 
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">INCLUSION JUVENIL</h1>
                <h3 className="float-left subtitulo-subeje">subtitulo inclusion</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">12.454</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de alumnos</h4>
              </Col>                              
            </Row>
          </Col> 
          <Col xs="12" className="item-estadistica-jp">
            <Row className="item-dato-final">
              <Col xs="1">
                <div className="item-circulo float-left"></div>
              </Col>
              <Col xs="4">
                <h1 className="float-left titulo-subeje">DISCAPACIDAD</h1>
                <h3 className="float-left subtitulo-subeje">subtitulo discapacidad</h3>
              </Col>
              <Col xs="3">
                <h1 className="float-left valor-general text-info">12.454</h1>
              </Col>
              <Col xs="4">
                <h4 className="float-left descripcion-valor-general">Cantidad de personas asistidas</h4>
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

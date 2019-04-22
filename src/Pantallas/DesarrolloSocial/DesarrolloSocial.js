import React from 'react';
import '../Pantallas.css';
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

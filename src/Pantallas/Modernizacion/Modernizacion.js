import React from 'react';
import '../../Vista/VistaSubejes.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import axios from 'axios';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';
import { Link } from "react-router-dom";
class DesarrolloSocial extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        datos: [{}]
    }
    console.log(this.props.pkeje);
  }

  componentDidMount(){
    this.TomarDatos();
    console.log(this.props)
  }

  TomarDatos(){
    const formData = new FormData();
    formData.append('opcion','traer_subejes');
    formData.append('fkeje',this.props.pkeje);
    axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData)
    .then((function(data){
        //console.log(data.data);
      this.setState({datos: data.data});
    }).bind(this));
  }


  render() {
    console.log(this.state.datos);
    const items=this.state.datos.map((item,index)=>
      {
      if (item.detalle) {
        return(
          <Col xs="12" className="item-estadistica-jp" key={index}>
          <Row className="item-dato-final">
            <Col xs="1">
              <div className="item-circulo float-left"></div>
            </Col>
            <Col xs="4">
              <Link to={"./Analytics"}>
              <h1 className="float-left titulo-subeje">{item.subeje}</h1>
              </Link>
              <h3 className="float-left subtitulo-subeje">{item.subtitulo}</h3>
            </Col>
            <Col xs="3">
              <h1 className="float-left valor-general-subeje text-info">{item.dato_global}</h1>
            </Col>
            <Col xs="4">
              <h4 className="float-left descripcion-valor-general">{item.detalle}</h4>
            </Col>                              
          </Row>
          </Col>); 
      }
    });  

    return (
      <>
        <Contenedor titulo={this.props.titulo} />
        {items}                             
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

import React from 'react';
import '../../Vista/VistaCuadros.css';
import Contenedor from '../../Vista/Contenedor';
import MasInfo from '../../Vista/MasInfo';
import axios from 'axios';
import {
  Nav, NavItem, NavLink, Card, Table, Col, Row
} from 'reactstrap';





class Analytics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        datos: [],
        datos_dispositivos: [],
        datos_canales: []
    }
  }
    componentDidMount(){
      this.TomarDatos();
      console.log(this.props);

    }
    TomarDatos(){
      const formData = new FormData();
      formData.append('opcion','traer_datos_analytics');
      axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData)
      .then((function(data){
        console.log(data.data);
        this.setState({datos: data.data});
      }).bind(this));

      const formData2 = new FormData();
      formData2.append('opcion','traer_datos_analytics_dispositivos');
      axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData2)
      .then((function(data){
        console.log(data.data);
        this.setState({datos_dispositivos: data.data});
      }).bind(this));

      const formData3 = new FormData();
      formData3.append('opcion','traer_datos_analytics_canales');
      axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData3)
      .then((function(data){
        console.log(data.data);
        this.setState({datos_canales: data.data});
      }).bind(this));
      
    }
  render() {
    console.log(this.state)
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
                <Col>
                  {
                   this.state.datos && this.state.datos.map(function(data){
                      return(
                        <Row >

                            <h3 className="link texto-pagina">{capitalizeFirstLetter(data.pagina.replace('.php','').split(/[-_]/).join(' '))}</h3>
                            <h2 className="text-info ml-auto">{data.cantidad_visitas}</h2>
                        </Row>
                      )
                   }) 
                  } 
                </Col>
              </Col>
              <Col xs="3" className="item-dato-final1">
                <h2 className="centrado">ORIGEN</h2>
                <Col>
                  { 
                   this.state.datos_canales && this.state.datos_canales.map(function(data){
                      return(
                        <Row>
                          <h2 className="link texto-pagina">{data.canal}</h2>
                          <h1 className="text-info ml-auto">{data.cantidad_visitas}</h1>
                        </Row>
                      )
                   }) 
                  } 
                </Col>
              </Col>
              <Col xs="3" className="item-dato-final1">
                <h2 className="centrado">DISPOSITIVOS USADOS</h2>
                <Col>
                 {
                   this.state.datos_dispositivos && this.state.datos_dispositivos.map(function(data){
                      return(
                        <Row>
                            <h3 className="float-left texto-pagina">
                              <span >{data.dispositivo}</span>
                            </h3>
                            <h1 className="text-info link ml-auto">{data.cantidad_visitas}</h1>
                        </Row>
                      )
                   }) 
                  } 
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
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

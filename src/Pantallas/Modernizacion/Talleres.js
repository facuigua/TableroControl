import React from 'react';
import Contenedor from '../../Vista/Contenedor';
import axios from 'axios';
import VistaDistribucion from '../../Vista/VistaDistribucionNoProg';
import {
    Col
  } from 'reactstrap';

class Tramites extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        datos: [{}]
    }
    //console.log('pksubeje',this.props.pksubeje);
  }

  componentDidMount(){
    this.TomarDatos();
    //console.log(this.props)
  }
  
  TomarDatos(){
    const formData = new FormData();
    formData.append('opcion','traer_datos_subeje');
    formData.append('fksubeje',this.props.pksubeje);
    axios.post('https://netmuni.lacosta.gob.ar/sistemas/estadisticas/modulos/modulo_tablero_subejes.php', formData)
    .then((function(data){
        console.log('datos',data.data);
      this.setState({datos: data.data});
    }).bind(this));
  }

  render() {
    //console.log('datuncios',this.state.datos);
    return (
    <>
        <Contenedor titulo={this.props.titulo} ocultar={true}/>
        <VistaDistribucion datosVista={this.state.datos}/>
        
    </>
    );
  }
}

export default Tramites;

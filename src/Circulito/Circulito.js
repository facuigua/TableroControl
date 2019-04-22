import React, { Component } from 'react';
import './Circulito.css';
import Eje from './Eje';
import {
  Col
} from 'reactstrap';
import router from '../router';

class Circulito extends Component {
  render() {
    let arre = !this.props.clase ? true : false;
    var numerito = 0;
    var numerito2 = 0;
    var arrayTitulos = [];
    var posiciones = [1,5,10,15];
    return (
      <Col className={this.props.clase ? "jp-contenedor-circulito "+this.props.clase : "jp-contenedor-circulito h-100"}>
        <div className="jp-circulito">
        {router.map((data, key) =>{
          if(!data.exact){
            if(numerito === 1){
              return (
                <>
                <Eje 
                  key={key}
                  link={arre}
                  pkeje={data.pkeje}
                  posicion={posiciones[numerito2]}
                  titulo1={[arrayTitulos[0].titulo, arrayTitulos[0].path, (this.props.titulo === arrayTitulos[0].titulo) ? true : false]}//titulo, link
                  titulo2={[data.titulo, data.path, (this.props.titulo === data.titulo) ? true : false]}
                />
                {(() => {
                  arrayTitulos = [];
                  numerito = 0;
                  numerito2++;
                })()}
                </>
              )
            } else {
              arrayTitulos.push(data);
              numerito++;
              return(true);
            }
          } else {
            return(true);
          }
        })}
          

        </div>
      </Col>
    );
  }
}

export default Circulito;

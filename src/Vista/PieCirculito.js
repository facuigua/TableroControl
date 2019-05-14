import React from 'react';
import Circulito from '../Circulito/Circulito';
import './PieCirculito.css';
import { Link } from "react-router-dom";
import router from '../router';
class PieCirculito extends React.Component {
  activoSiguiente(){
    return router.map((data, key) =>{
      if((data.titulo === this.props.titulo) && !data.exact){
        if(key === 7){
          key = 0;
        } else if (key === 8) {
          key = -1;
        }
        return router[key+2].path;
        
      } else {
        return false;
      }
    }).filter(function(e){return e})[0];
  }

  volverApp() {
    document.body.classList.add('pagina-principal');
  }

  render() {
    const ocultar=this.props.ocultar?"d-none":"";

    return (
      <>      
          <Link to={this.activoSiguiente()}><div className={`boton-derecha-jp float-left ${ocultar}`}><i className="far fa-arrow-alt-circle-right"></i></div></Link>
          <Link to="/" onClick={this.volverApp.bind(this)} className="link-pie-circulito"><Circulito clase="circulo-pie" titulo={this.props.titulo} /></Link>
      </>
    );
  }
}

export default PieCirculito;

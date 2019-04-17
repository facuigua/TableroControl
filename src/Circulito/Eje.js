import React from 'react';
import './Eje.css';
import { Link } from "react-router-dom";


class Eje extends React.Component {

  render() {
    if(this.props.link) {
      return (
        <div className={"jp-eje e"+this.props.posicion}>
          <Link to={this.props.titulo1[1]}><h1>{this.props.titulo1[0]}</h1></Link>
          <Link to={this.props.titulo2[1]}><h2>{this.props.titulo2[0]}</h2></Link>
        </div>
      );
    } else {
      let after = this.props.titulo2[2] ? 'after' : '';
      let before = this.props.titulo1[2] ? 'before' : '';
      return (
        <div className={"jp-eje e"+this.props.posicion+" "+after+" "+before}>
          <h1>{this.props.titulo1[0]}</h1>
          <h2>{this.props.titulo2[0]}</h2>
        </div>
      );
    }
  }
}

export default Eje;

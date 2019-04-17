import React, { Component } from 'react';
import './App.css';
import './font/fuente.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import {
  Container, Row
} from 'reactstrap';
import router from '../router';

class App extends Component {

  componentDidMount(){
    if(window.location.pathname === '/')
      document.body.classList.add('pagina-principal');
  }
  render() {
    return (
      <Router>
        <Container className="h-100">
          <Row className="h-100">
            <Switch>
              {router.map((data, key) =>{
                return <Route key={key} path={data.path} exact={data.exact} render={(props) => <data.componente {...props} titulo={data.titulo} />} />
              })}
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;

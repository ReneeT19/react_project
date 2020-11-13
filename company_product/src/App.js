import React, {Component, useState} from 'react';
// import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import axios from 'axios';
import { render } from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }

//   const [state, setState] = useState([]);

//   const getApiAxios = (resource, id) => {
//     axios.get(`https://dog.ceo/api/breeds/image/random`)
//         .then(response => {
//             setState(response.data);
//         })
// }

// const clearState = () => {
//   setState([]);
// }
componentDidMount() {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    this.setState({ imageURL: response.data.message });
  })
  .catch(error => {
    console.log(error);
  });
}


render(){
  const { imageURL } = this.state;
  
  return (
<div>
  <Header />
    <main>
        <Switch>

            <Route path="/" component={Home} exact >
              <img src={imageURL} />
            </Route>
            <Route path="/product" component={Product} ></Route>
            <Route path="/about" component={About} ></Route>
            <Route component={Error} ></Route>
        </Switch>
    </main>
    <Footer />
</div>
  );
}
}

export default App;

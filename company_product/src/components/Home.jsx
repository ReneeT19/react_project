import React, {Component} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          imageURL: '',
        }
      }

    componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
        console.log(error);
    });
  }
    // componentDidMount() {
    //   axios
    //     .get('https://dog.ceo/api/breeds/image/random/')
    //     .then(response => {
    //       this.setState({ imageURL: response.data.message });
    //     })
    //     .catch(err => {
    //       console.log('Error happened during fetching!', err);
    //     });
    // }

    render() {
    const { imageURL } = this.state;
    return (
        <div>
        <div className="list-books-title">
          <h1>Spoil your soul with our best books!</h1>
          <Helmet bodyAttributes={{style: 'background-color: #FFF0F5'}} />
        </div>
        <img src = {imageURL} />
        </div> 
    );
};
}

export default Home;
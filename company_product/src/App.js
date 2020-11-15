import React, {Component, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ'
import * as BooksAPI from './components/BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import Confirmation from './components/Confirmation';
import SearchBooks from './components/SearchBooks';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';


class App extends Component {
  state = {
    mybooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((mybooks) => {
      this.setState({mybooks: mybooks})
    })
  }

  shelfChange = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          mybooks: prevState.mybooks.map((b) => b.id === book.id ? book : b)
        }
      }
      )
    )
  }

  addBook = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(
      this.setState(state => (
        {mybooks: state.mybooks.concat([ book ])}
        )
      )
    )
  }

render(){
  
  return (
    <Router>
<div className="app">
  <Header />
    <main>
        <Switch>

            <Route path="/" component={Home} exact >
            </Route>
            {/* <Route component={Error} ></Route> */}

            <Route path="/about" component={About} ></Route> 

            <Route exact path="/listbooks" render={() => (
            <ListBooks mybooks={this.state.mybooks} shelfChange={this.shelfChange}/>
            )} />

            <Route exact path="/search" render={() => (
            <SearchBooks shelfChange={this.addBook} mybooks={this.state.mybooks}/>
           )} />
            
            <Route exact path="/confirmation" render={() => (
            <Confirmation mybooks={this.state.mybooks} shelfChange={this.shelfChange}/>
            )} />

            <Route path="/faq" component={FAQ} ></Route> 
          </Switch>
          
    </main>
    <Footer />
</div>
</Router>
  );
}
}

export default App;

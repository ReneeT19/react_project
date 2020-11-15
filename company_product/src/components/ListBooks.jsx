import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelfInfo from './BookShelfInfo'
import Confirmation from './Confirmation';
import {BrowserRouter as Route,Router,Redirect} from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';

// import {BrowserRouter as Router,Route,
//   Redirect,Switch} from 'react-router-dom';

class ListBooks extends Component {
  
  render() {
    const { mybooks, shelfChange } = this.props

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>List of Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelfInfo title="Currently Available" books={mybooks.filter((book) => book.shelf === 'currentlyReading')} shelfChange={shelfChange}/>
            <BookShelfInfo title="Shopping Cart" books={mybooks.filter((book) => book.shelf === 'wantToRead')} shelfChange={shelfChange}/>
            <Route path="/confirmation" component={Confirmation} />
            <Button href="/confirmation">Check Out</Button>
            <BookShelfInfo title="Save For Later" books={mybooks.filter((book) => book.shelf === 'read')} shelfChange={shelfChange}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>

    )
  }
}

export default ListBooks
import React, {Component} from 'react';
import BookShelfInfo from './BookShelfInfo'
import Popup from './Popup'
import { Button } from 'react-bootstrap';


class Confirmation extends Component {
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
    }  
    
      togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  render() {
    const { mybooks } = this.props

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>List of Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelfInfo title="Shopping Cart" books={mybooks.filter((book) => book.shelf === 'wantToRead')} />
            {/* <Button onClick={this.props.closePopup}>close me</Button>   */}
            <Button onClick={this.togglePopup.bind(this)}> Place The Order</Button>  

            {this.state.showPopup ?  
            <Popup  
            text='Your order is successfully placed'  
            closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            } 
          </div>
        </div>
        <div className="open-search">
        </div>
      </div>

    )
  }
}

export default Confirmation;
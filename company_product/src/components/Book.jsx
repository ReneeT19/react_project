import React, { Component } from 'react'

class Book extends Component {
  state = {}

  bookShelfChange = (e) => {
    e.preventDefault()
    const shelf = e.target.value;
    if(this.props.shelfChange)
    this.props.shelfChange(this.props.book, shelf);
};

  render(){
    const { book } = this.props
    var price = Math.floor(Math.random() * (200 - 10) + 1)
    const shelves = [
      { text : 'Currently Avaialble', value : 'currentlyReading' },
      { text : 'Add To Cart', value : 'wantToRead' },
      { text : 'Save For Later', value : 'read' },
      { text : 'Remove', value : 'none' },
      { text : 'Price: ' + '$' + price},
    ]

    return(
      <li >
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{ width: 128, height: 193,
                backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ""
              }}>
            </div>

            <div className={`book-shelf-changer book-shelf-changer-${book.shelf}`}>
              <select defaultValue={book.shelf} onChange={this.bookShelfChange}>
                <option value="" disabled>Move to...</option>
                {shelves.map((shelf) => (
                  <option key={shelf.value} value={shelf.value}>{shelf.text}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
        </div>
      </li>
    )
  }
}

export default Book;
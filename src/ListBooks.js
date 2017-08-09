import React, { Component } from 'react';
import Book from './Book'


class ListBooks extends Component {

render(){
    const { books } = this.props
    return (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            {books.map( book =>
                                                <Book book={book} key={book.id}/>
                                            )}

                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>
            )
    }
}

export default ListBooks
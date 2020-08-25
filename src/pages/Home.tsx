import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBook } from '../store/actions'
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
interface BookInterface {
    body: string;
    id: number;
    price: number;
    src: string;
    title: string;
    userId: number;
}

interface RootState {
    books: BookInterface[]
}
const Home = () => {
    const dispatch = useDispatch()
    const { books } = useSelector((state: RootState) => state)
    const handleBook = (book: BookInterface) => {
        dispatch(setBook(book))
    }
    return <div className="books">
        {books.map( book => {
            const { id, title, body, src } = book
            return (
                <div className="book" key={id}>
                    <div className="book-src"><img src={src} /></div>
                    <div className="book-title" onClick={() => handleBook(book)}>
                        <Link to="/book">{title}</Link>
                    </div>
                    <div className="book-description">{body}</div>
                    <div className="book-buy-button">Buy Now</div>
                </div>
            )
        })}
    </div>
}

export default Home